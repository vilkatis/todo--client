import { EventEmitter, Output } from '@angular/core';
import { IEvent } from '../models';

export abstract class AbstractComponent {
  @Output() fireEvent: EventEmitter<IEvent> = new EventEmitter<IEvent>();

  public catchEvent($event: IEvent) {
    this.fireEvent.emit($event);
  }
}
