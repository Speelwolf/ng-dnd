import { Component } from '@angular/core';
import { DraggedItem, HoverTrigger } from '@ng-dnd/sortable';
import { ItemTypes } from '../item-types';
import { SortableSpecService, Card } from '../specs';

@Component({
  selector: 'kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  ItemTypes = ItemTypes;
  hoverTrigger = HoverTrigger.fixed;

  constructor(public specs: SortableSpecService) { }

  addCard(listId: number, title: string) {
    // this.store.dispatch(new AddCard(listId, title));
  }

  removeCard(ev: DraggedItem<Card>) {
    // this.store.dispatch(new RemoveCard(ev));
  }
}
