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

  public handleClick(): void {
    this.fireEvent.emit(
      {
        type: 'todo',
        action: {
          type: 'select',
          payload: this.selectedId
        }
      }
    );
  }
}
