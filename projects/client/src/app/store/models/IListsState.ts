import { IList } from '../../models';

export interface IListsState {
  entities: Record<string, IList>;
  orderedIdsArray: string[];
  selectedId: string;
  isLoading: boolean;
  isLoaded: boolean;
}
