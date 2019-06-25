import { Component, Input } from '@angular/core';
import { IList } from '../../../models';
import { AbstractComponent } from '../../../helpers';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent extends AbstractComponent {
  @Input() lists: IList[];
  @Input() selectedId: string;

  handleSelectClick(listId: string) {
    this.fireEvent.emit({
      type: 'list',
      action: {
        type: 'select',
        payload: listId
      }
    });
  }

  handleAddListClick(): void {
    const listName: string = prompt('Please write the list name.');
    if (listName) {
      this.fireEvent.emit({
        type: 'list',
        action: {
          type: 'add',
          payload: listName
        }
      });
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
