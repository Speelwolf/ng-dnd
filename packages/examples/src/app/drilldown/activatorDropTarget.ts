import { DropTargetSpec, DndService } from '@ng-dnd/core';
import { Observable, Subject } from 'rxjs';
import { delay, distinctUntilChanged, filter, switchMapTo, take, takeUntil } from 'rxjs/operators';

type Types = string | symbol | (string | symbol)[];

export class ActivatedWith {
  constructor(public type: string | symbol, public item: any) { }
}

export type ActivatorSpec = DropTargetSpec & { onActivate: (a: ActivatedWith) => void };

export function activatorDropTarget(
  dnd: DndService,
  types: Types,
  waitMillis: number,
  spec: ActivatorSpec
) {
  // hover events input stream
  const hoverSubject$ = new Subject<ActivatedWith>();

  const dt = dnd.dropTarget(types, {
    ...(spec as DropTargetSpec),
    hover: monitor => {
      hoverSubject$.next(new ActivatedWith(monitor.getItemType()!, monitor.getItem()));
      spec.hover && spec.hover(monitor);
    },
  });

  const startedHovering$ = dt
    .listen(m => m.isOver() && m.canDrop())
    .pipe(
      // just emit when it changes to not-isOver
      distinctUntilChanged(),
      filter(isOver => isOver)
      // tap(() => console.log('started (isOver)'))
    );

  const stoppedHovering$ = dt
    .listen(m => m.isOver())
    .pipe(
      // just emit when it changes to not-canDrop
      distinctUntilChanged(),
      filter(canDrop => canDrop === false)
      // tap(() => console.log('stoppedHovering (canDrop)'))
    );

  const activations$: Observable<ActivatedWith> = startedHovering$.pipe(
    // tap(() => console.log('startedHovering -> switchMapTo(...)')),
    switchMapTo(hoverSubject$.pipe(delay(waitMillis), takeUntil(stoppedHovering$), take(1)))
  );

  // internal subscription should die when the connection is torn down
  const subsc = activations$.subscribe(spec.onActivate);
  dt.add(subsc);

  return dt;
}
