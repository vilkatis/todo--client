import { EventHandlerService } from '../providers';
import { IEvent } from '../models';

export class AbstractContainer {
  constructor(private eventHandlerService: EventHandlerService) {
  }

  public handleEvent($event: IEvent) {
    this.eventHandlerService.catchEvent($event);
  }
}
