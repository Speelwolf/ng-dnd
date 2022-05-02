import {
  Component,
  Input,
  TemplateRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  AfterContentInit,
  ElementRef,
  QueryList,
  SimpleChanges,
  ContentChildren,
  OnInit,
} from '@angular/core';
import { DndService } from '@ng-dnd/core';
import { DndSortableTemplate, TemplateContext } from './template.directive';
import { DndSortable } from './sortable.directive';

@Component({
  selector: 'dnd-sortable-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let card of children; let i = index; trackBy: trackById" >
      <ng-container *ngTemplateOutlet="template; context: { $implicit: contextFor(card, i) }">
      </ng-container>
    </ng-container>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  // allow injecting the directive and getting the component
  providers: [{
    provide: DndSortable,
    useExisting: DndSortableList
  }]
})
export class DndSortableList<Data> extends DndSortable<Data>
  implements OnChanges, OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  @Input() template: TemplateRef<TemplateContext<Data>> | null = null;

  /** @ignore */
  @ContentChildren(DndSortableTemplate, {
    read: TemplateRef
  })
  set renderTemplates(ql: QueryList<TemplateRef<TemplateContext<Data>>>) {
    if (ql.length > 0) {
      this.template = ql.first;
    }
  }

  /** @ignore */
  constructor(
    dnd: DndService,
    el: ElementRef<HTMLElement>,
    cdr: ChangeDetectorRef,
  ) {
    super(dnd, el, cdr);
  }

  /** @ignore */
  trackById = (_: number, data: Data) => {
    return this.spec && this.spec.trackBy(data);
  };

  /** @ignore */
  ngAfterContentInit() {
    if (!this.template) {
      throw new Error('You must provide a <ng-template cardTemplate> as a content child, or with [template]="myTemplateRef"');
    }
  }

  // forwarding lifecycle events is required until Ivy renderer

  /** @ignore */
  ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
  }

  /** @ignore */
  ngOnInit() {
    super.ngOnInit();
  }

  /** @ignore */
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  /** @ignore */
  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
