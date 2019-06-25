import { ListComponent } from './list/list.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { ListMenuItemComponent } from './list-menu-item/list-menu-item.component';
import { TaskComponent } from './task/task.component';
import { AccountComponent } from './account/account.component';


export const components: any[] = [
  AccountComponent,
  ListComponent,
  ListMenuComponent,
  ListMenuItemComponent,
  TaskComponent
];

export * from './list/list.component';
export * from './list-menu/list-menu.component';
export * from './list-menu-item/list-menu-item.component';
export * from './task/task.component';
