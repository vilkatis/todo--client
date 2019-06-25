import { Component, Input } from '@angular/core';
import { ITask } from '../../../models';
import { AbstractComponent } from '../../../helpers';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})

export class ListComponent extends AbstractComponent {
  @Input() tasks: ITask[];
  @Input() listId: string;
  @Input() listName: string;

  public handleAddTask() {
    const taskName: string = prompt('Please write the task.');
    if (taskName) {
      this.fireEvent.emit({
        type: 'task',
        action: {
          type: 'add',
          payload: {listId: this.listId, taskName}
        }
      });
    }
  }

  public handleRemoveCompleted() {
    const userConfirmation: boolean = confirm('Are you sure you want to remove all completed tasks?');
    if (userConfirmation) {
      this.fireEvent.emit({
        type: 'list',
        action: {
          type: 'removeCompleted',
          payload: this.listId
        }
      });
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
