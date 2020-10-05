import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { HasRoleModule } from 'src/app/directives/has-role/has-role.module';
import { DetailLayoutModule } from 'src/app/modules/detail-layout/detail-layout.module';
import { MembersTableModule } from 'src/app/modules/members-table/members-table.module';

import { IamMembersRoutingModule } from './iam-members-routing.module';
import { IamMembersComponent } from './iam-members.component';


@NgModule({
    declarations: [IamMembersComponent],
    imports: [
        IamMembersRoutingModule,
        DetailLayoutModule,
        CommonModule,
        HasRoleModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        TranslateModule,
        MembersTableModule,
    ],
})
export class IamMembersModule { }
