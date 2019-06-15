export interface IEntityState<T> {
  entities: Record<string, T>;
  ids: string[];
}
