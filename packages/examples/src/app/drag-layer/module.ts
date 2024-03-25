import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';

import { CustomDragLayerComponent } from './custom-drag-layer/custom-drag-layer.component';
import { DraggableBoxComponent } from './draggable-box/draggable-box.component';
import { DragContainerComponent } from './drag-container/drag-container.component';
import { BoxDragPreviewComponent } from './box-drag-preview/box-drag-preview.component';
import { ContainerComponent } from './container.component';
import { BoxComponent } from './box.component';

@NgModule({
  imports: [
    CommonModule,
    DndModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    CustomDragLayerComponent,
    DraggableBoxComponent,
    DragContainerComponent,
    BoxDragPreviewComponent,
    BoxComponent,
  ],
})
export class DragLayerModule {}
