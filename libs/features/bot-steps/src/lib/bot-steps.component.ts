import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  NgZone,
  OnInit,
  inject,
} from '@angular/core';
import { filter, fromEvent, noop, tap } from 'rxjs';

import { ActionCard } from '@doitbig/components/action-card';
import { BotStepChildActionModel } from '@doitbig/data/models';
import { BotStepsStatic } from '@doitbig/data/static';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

enum ClassList {
  SELECTED = 'todo-selected',
  SMART = 'todo-smart',
}

@Component({
  selector: 'do-it-big-bot-steps',
  standalone: true,
  imports: [CommonModule, ActionCard],
  templateUrl: './bot-steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'automation-panel',
  },
})
export class BotStepsComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private ngZone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  protected stepsData = BotStepsStatic;
  public targets = new Set<HTMLElement>();
  protected _currentStep = 1;
  public set currentStep(v: number) {
    this._currentStep = v;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this._startObserve();
    });
  }

  public reset() {
    this.targets.forEach((el) =>
      el.classList.remove(ClassList.SELECTED, ClassList.SMART)
    );
    this.targets.clear();
    this.currentStep = 1;
  }

  protected cardClicked(event: BotStepChildActionModel) {
    console.log(event);
    this.currentStep = 4;
  }

  private _startObserve() {
    fromEvent(document, 'click')
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => {
          const _el = event.target as HTMLElement;
          const _targetClasses = ['btn-add', 'input-todo'];
          return (
            _el.localName === 'form' ||
            _targetClasses.some((i) => _el.classList.contains(i))
          );
        }),
        tap((event) => {
          const target = (event.target as HTMLElement).closest(
            'form'
          ) as HTMLFormElement;
          this._toggleTargetList(target);
        })
      )
      .subscribe(noop);
  }

  private _toggleTargetList(el: HTMLElement) {
    el.classList.toggle(ClassList.SELECTED);
    el.classList.contains(ClassList.SELECTED)
      ? this.targets.add(el)
      : this.targets.delete(el);
    this._predictSimilar(el);
  }

  private _predictSimilar(target: HTMLElement) {
    const _parent = (target.parentElement as HTMLElement).childNodes;

    if (this.targets.size >= 2) {
      this.currentStep = 2;
    } else {
      this.currentStep = 1;
    }

    _parent.forEach((el) => {
      const _el = el as HTMLElement;
      _el.classList?.remove(ClassList.SMART);
      if (_el.localName === 'form' && this.targets.size >= 2)
        !_el.classList.contains(ClassList.SELECTED)
          ? _el.classList.add(ClassList.SMART)
          : this.targets.add(_el);
    });
  }
}
