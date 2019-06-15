import { IEventAction } from './IEventAction';

export interface IEvent {
  type: string;
  action: IEventAction;
}
