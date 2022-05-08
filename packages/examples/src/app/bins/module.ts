import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';
import { DndMultiBackendModule } from '@ng-dnd/multi-backend';
import { UtilityModule } from '../utility.module';

import { BinComponent } from './bin.component';
import { TrashPileComponent } from './trash-pile.component';
import { TrashComponent } from './trash.component';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [BinComponent, TrashPileComponent, TrashComponent, ContainerComponent],
  imports: [
    CommonModule,
    DndModule,
    DndMultiBackendModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    UtilityModule,
  ],
})
export class BinsModule {}
