import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollableModule } from 'src/app/directives/scrollable/scrollable.module';
import { HasRolePipeModule } from 'src/app/pipes/has-role-pipe.module';
import { LocalizedDatePipeModule } from 'src/app/pipes/localized-date-pipe.module';

import { ChangesComponent } from './changes.component';


@NgModule({
    declarations: [
        ChangesComponent,
    ],
    imports: [
        CommonModule,
        ScrollableModule,
        MatProgressSpinnerModule,
        TranslateModule,
        HasRolePipeModule,
        ScrollingModule,
        LocalizedDatePipeModule,
    ],
    exports: [
        ChangesComponent,
        ScrollableModule,
    ],
})
export class ChangesModule { }
