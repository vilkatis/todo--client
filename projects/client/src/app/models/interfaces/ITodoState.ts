import { IList } from '../index';

export interface ITodoState {
  entities: Record<string, IList>;
  selectedId: string;
  isLoading: boolean;
  isLoaded: boolean;
}
