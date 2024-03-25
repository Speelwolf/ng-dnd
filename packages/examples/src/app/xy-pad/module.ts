import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DndModule } from '@ng-dnd/core';
import { CustomDragLayerComponent } from './custom-drag-layer/custom-drag-layer.component';
import { DraggableBoxComponent } from './draggable-box/draggable-box.component';
import { DragContainerComponent } from './drag-container/drag-container.component';
import { BoxDragPreviewComponent } from './box-drag-preview/box-drag-preview.component';
import { ContainerComponent } from './container.component';
import { SpotComponent } from './spot.component';
import { CrosshairsComponent } from './crosshairs.component';
import { CubeComponent } from './cube.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DndModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
    ContainerComponent,
    CustomDragLayerComponent,
    DraggableBoxComponent,
    DragContainerComponent,
    BoxDragPreviewComponent,
    SpotComponent,
    CrosshairsComponent,
    CubeComponent,
  ],
})
export class XyPadModule {}
