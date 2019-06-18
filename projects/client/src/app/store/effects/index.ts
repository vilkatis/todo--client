import { AuthEffects } from './auth.effects';
import { TodoEffects } from './todo.effects';
import { RootEffects } from './root.effects';

export const effects: any[] = [
  AuthEffects,
  RootEffects,
  TodoEffects
];

export * from './auth.effects';
export * from './root.effects';
export * from './todo.effects';
