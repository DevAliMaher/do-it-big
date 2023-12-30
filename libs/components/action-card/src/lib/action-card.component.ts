import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { BotStepChildActionModel } from '@doitbig/data/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'do-it-big-action-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.tabindex]': '1',
    '(click)': 'cardClicked.emit(cardData)',
    class:
      'focus:bg-white-700 focus-visible:bg-white-700 w-[232px] flex flex-col items-center text-center border-[2px] border-solid border-gray-200 p-4 gap-4 bg-white-100 rounded-md cursor-pointer',
  },
})
export class ActionCardComponent {
  @Input({ required: true }) cardData!: BotStepChildActionModel;
  @Output() cardClicked = new EventEmitter<BotStepChildActionModel>();
}
