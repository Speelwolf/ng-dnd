import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '@app/utility.module';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';

import { ContainerComponent } from './container.component';
import { BoxComponent } from './box.component';
import { DustbinComponent } from './dustbin.component';

@NgModule({
  declarations: [ContainerComponent, BoxComponent, DustbinComponent],
  imports: [
    CommonModule,
    UtilityModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
  ],
})
export class NestedTargetsModule {}
