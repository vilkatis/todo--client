import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-list-menu-item',
  templateUrl: './list-menu-item.component.html',
  styleUrls: ['./list-menu-item.component.scss']
})
export class ListMenuItemComponent {
  @Input() name: string;
  @Input() count: number;
  @HostBinding('class.is-active')
  @Input() isActive: boolean;

  @HostListener('click')
  handleClick() {
  }
}
