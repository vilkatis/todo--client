import { IList } from '../index';
import { IEntityState } from './IEntityState';

export interface IListsState  extends IEntityState<IList> {
  selectedId: string;
  isLoading: boolean;
  isLoaded: boolean;
}
