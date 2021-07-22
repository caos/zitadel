import { Component, Injector, OnDestroy, Type } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { BehaviorSubject, from, interval, Observable, of, Subject, Subscription } from 'rxjs';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import {
  GetCustomLoginTextsRequest as AdminGetCustomLoginTextsRequest,
  GetDefaultLoginTextsRequest as AdminGetDefaultLoginTextsRequest,
  SetCustomLoginTextsRequest as AdminSetCustomLoginTextsRequest,
} from 'src/app/proto/generated/zitadel/admin_pb';
import {
  GetCustomLoginTextsRequest,
  GetDefaultLoginTextsRequest,
  SetCustomLoginTextsRequest,
} from 'src/app/proto/generated/zitadel/management_pb';
import { AdminService } from 'src/app/services/admin.service';
import { ManagementService } from 'src/app/services/mgmt.service';
import { ToastService } from 'src/app/services/toast.service';

import { GridPolicy, LOGIN_TEXTS_POLICY } from '../../policy-grid/policies';
import { WarnDialogComponent } from '../../warn-dialog/warn-dialog.component';
import { PolicyComponentServiceType } from '../policy-component-types.enum';
import { mapRequestValues } from './helper';

// tslint:disable
const KeyNamesArray = [
  'emailVerificationDoneText',
  'emailVerificationText',
  'externalUserNotFoundText',
  'footerText',
  'initMfaDoneText',
  'initMfaOtpText',
  'initMfaPromptText',
  'initMfaU2fText',
  'initPasswordDoneText',
  'initPasswordText',
  'initializeDoneText',
  'initializeUserText',
  'linkingUserDoneText',
  'loginText',
  'logoutText',
  'mfaProvidersText',
  'passwordChangeDoneText',
  'passwordChangeText',
  'passwordResetDoneText',
  'passwordText',
  'passwordlessText',
  'registrationOptionText',
  'registrationOrgText',
  'registrationUserText',
  'selectAccountText',
  'successLoginText',
  'usernameChangeDoneText',
  'usernameChangeText',
  'verifyMfaOtpText',
  'verifyMfaU2fText',
];
// tslint:enable

const REQUESTMAP = {
  [PolicyComponentServiceType.MGMT]: {
    get: new GetCustomLoginTextsRequest(),
    set: new SetCustomLoginTextsRequest(),
    getDefault: new GetDefaultLoginTextsRequest(),
    setFcn: (mgmtmap: Partial<SetCustomLoginTextsRequest.AsObject>): SetCustomLoginTextsRequest => {
      let req = new SetCustomLoginTextsRequest();
      req.setLanguage(mgmtmap.language ?? '');
      req = mapRequestValues(mgmtmap, req);
      return req;
    },
  },
  [PolicyComponentServiceType.ADMIN]: {
    get: new AdminGetCustomLoginTextsRequest(),
    set: new AdminSetCustomLoginTextsRequest(),
    getDefault: new AdminGetDefaultLoginTextsRequest(),
    setFcn: (adminmap: Partial<AdminSetCustomLoginTextsRequest.AsObject>): AdminSetCustomLoginTextsRequest => {
      let req = new AdminSetCustomLoginTextsRequest();
      req.setLanguage(adminmap.language ?? '');
      req = mapRequestValues(adminmap, req);
      return req;
    },
  },
};
@Component({
  selector: 'app-login-texts',
  templateUrl: './login-texts.component.html',
  styleUrls: ['./login-texts.component.scss'],
})
export class LoginTextsComponent implements OnDestroy {
  public currentPolicyChangeDate!: Timestamp.AsObject | undefined;
  public newerPolicyChangeDate!: Timestamp.AsObject | undefined;

  public totalCustomPolicy: { [key: string]: { [key: string]: string; }; } = {};

  public getDefaultInitMessageTextMap$: Observable<{ [key: string]: string; }> = of({});
  public getCustomInitMessageTextMap$: BehaviorSubject<{ [key: string]: string; }> = new BehaviorSubject({});

  public service!: ManagementService | AdminService;
  public PolicyComponentServiceType: any = PolicyComponentServiceType;
  public serviceType: PolicyComponentServiceType = PolicyComponentServiceType.MGMT;

  public currentSubMap: string = 'emailVerificationDoneText';

  public KeyNamesArray: string[] = KeyNamesArray;
  public locale: string = 'en';
  public LOCALES: string[] = ['en'];

  private sub: Subscription = new Subscription();

  public updateRequest: any;
  public currentPolicy: GridPolicy = LOGIN_TEXTS_POLICY;

  public destroy$: Subject<void> = new Subject();
  constructor(
    private route: ActivatedRoute,
    private injector: Injector,
    private dialog: MatDialog,
    private toast: ToastService,
  ) {
    this.sub = this.route.data.pipe(switchMap(data => {
      this.serviceType = data.serviceType;
      switch (this.serviceType) {
        case PolicyComponentServiceType.MGMT:
          this.service = this.injector.get(ManagementService as Type<ManagementService>);

          this.service.getSupportedLanguages().then(lang => {
            this.LOCALES = lang.languagesList;
          });

          this.loadData();
          break;
        case PolicyComponentServiceType.ADMIN:
          this.service = this.injector.get(AdminService as Type<AdminService>);

          this.service.getSupportedLanguages().then(lang => {
            this.LOCALES = lang.languagesList;
          });

          this.loadData();
          break;
      }

      return this.route.params;
    })).subscribe(() => {
      interval(10000).pipe(
        // debounceTime(5000),
        takeUntil(this.destroy$),
      ).subscribe(x => {
        this.checkForChanges();
      });
    });
  }

  public getDefaultValues(req: any): Promise<any> {
    return this.service.getDefaultLoginTexts(req).then((res) => {
      if (res.customText) {
        // delete res.customText.details;
        return Object.assign({}, res.customText);
      } else {
        return {};
      }
    });
  }

  public getCurrentValues(req: any): Promise<any> {
    return (this.service as ManagementService).getCustomLoginTexts(req).then((res) => {
      if (res.customText) {
        this.currentPolicyChangeDate = res.customText.details?.changeDate;
        // delete res.customText.details;
        return Object.assign({}, res.customText);
      } else {
        return {};
      }
    });
  }

  public changeLocale(selection: MatSelectChange): void {
    this.locale = selection.value;
    this.loadData();
  }

  public async loadData(): Promise<any> {
    const reqDefaultInit = REQUESTMAP[this.serviceType].getDefault;
    reqDefaultInit.setLanguage(this.locale);
    this.getDefaultInitMessageTextMap$ = from(
      this.getDefaultValues(reqDefaultInit),
    ).pipe(map(m => m[this.currentSubMap]));

    const reqCustomInit = REQUESTMAP[this.serviceType].get.setLanguage(this.locale);
    this.totalCustomPolicy = (await this.getCurrentValues(reqCustomInit));
    this.getCustomInitMessageTextMap$.next(
      this.totalCustomPolicy[this.currentSubMap],
    );
  }

  private async patchSingleCurrentMap(): Promise<any> {
    const reqCustomInit = REQUESTMAP[this.serviceType].get.setLanguage(this.locale);
    const pol = (await this.getCurrentValues(reqCustomInit));
    this.getCustomInitMessageTextMap$.next(
      pol[this.currentSubMap],
    );
  }

  public checkForChanges(): void {
    console.log('checkforchanges');
    const reqCustomInit = REQUESTMAP[this.serviceType].get.setLanguage(this.locale);

    (this.service as ManagementService).getCustomLoginTexts(reqCustomInit).then(policy => {
      this.newerPolicyChangeDate = policy.customText?.details?.changeDate;
    });
  }

  public checkForUnsaved(): void {
    const unsaved = this.getCustomInitMessageTextMap$.getValue();
    const request = this.updateRequest[this.currentSubMap];

    console.log(unsaved, this.totalCustomPolicy[this.currentSubMap]);
  }

  public updateCurrentValues(values: { [key: string]: string; }): void {
    const setFcn = REQUESTMAP[this.serviceType].setFcn;
    this.totalCustomPolicy[this.currentSubMap] = values;

    this.updateRequest = setFcn(this.totalCustomPolicy);
    console.log(this.updateRequest.toObject());
    this.updateRequest.setLanguage(this.locale);
  }

  public saveCurrentMessage(): void {
    if (this.serviceType === PolicyComponentServiceType.MGMT) {
      (this.service as ManagementService).setCustomLoginText(this.updateRequest).then(() => {
        this.toast.showInfo('POLICY.MESSAGE_TEXTS.TOAST.UPDATED', true);
        setTimeout(() => {
          this.patchSingleCurrentMap();
        }, 1000);
      }).catch(error => this.toast.showError(error));
    } else if (this.serviceType === PolicyComponentServiceType.ADMIN) {
      (this.service as AdminService).setCustomLoginText(this.updateRequest).then(() => {
        this.toast.showInfo('POLICY.MESSAGE_TEXTS.TOAST.UPDATED', true);
        // this.loadData();
      }).catch(error => this.toast.showError(error));
    }
  }

  public resetDefault(): void {
    const dialogRef = this.dialog.open(WarnDialogComponent, {
      data: {
        icon: 'las la-history',
        confirmKey: 'ACTIONS.RESTORE',
        cancelKey: 'ACTIONS.CANCEL',
        titleKey: 'POLICY.LOGIN_TEXTS.RESET_TITLE',
        descriptionKey: 'POLICY.LOGIN_TEXTS.RESET_DESCRIPTION',
      },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(resp => {
      if (resp) {
        if (this.serviceType === PolicyComponentServiceType.MGMT) {
          (this.service as ManagementService).resetCustomLoginTextToDefault(this.locale).then(() => {
            setTimeout(() => {
              this.loadData();
            }, 1000);
          }).catch(error => {
            this.toast.showError(error);
          });
        }
      }
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }

  public async setCurrentType(key: string): Promise<void> {
    this.currentSubMap = key;

    this.checkForUnsaved();
    this.loadData();
  }

  public get newerVersionExists(): boolean {
    const toDate = (ts: Timestamp.AsObject) => {
      return new Date(ts.seconds * 1000 + ts.nanos / 1000 / 1000);
    };
    if (this.newerPolicyChangeDate && this.currentPolicyChangeDate) {
      const ms = toDate(this.newerPolicyChangeDate).getTime() - toDate(this.currentPolicyChangeDate).getTime();
      // show button if changes are newer than 10s
      return ms / 1000 > 10;
    } else {
      return false;
    }
  }
}
