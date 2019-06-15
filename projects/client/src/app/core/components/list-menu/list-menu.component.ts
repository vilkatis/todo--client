import { Component, Input } from '@angular/core';
import { IList } from '../../../models/interfaces';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {
  @Input() lists: IList[];
  @Input() selectedId: string;
  handleClick() {
  }
}
