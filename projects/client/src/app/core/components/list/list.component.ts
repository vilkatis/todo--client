import { Component, Input } from '@angular/core';
import { ITask } from '../../../models';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})

export class ListComponent {
  @Input() tasks: ITask[] = [
    {name: 'Buy Maserati Quattroporte S - Black', isCompleted: false},
    {name: 'Buy Apple Mackbook Pro Retina 15', isCompleted: true},
    {name: 'Buy house on Sri Lanka', isCompleted: false},
    {name: 'Buy new glamorous clothes', isCompleted: false},
    {name: 'Buy sunglasses', isCompleted: false},
    {name: 'Buy chocolate for my friend Kathy', isCompleted: true},
    {name: 'Buy trip to Tokyo', isCompleted: false},
    {name: 'Buy new iPad', isCompleted: false},
    {name: 'Buy flowers for my mother', isCompleted: false},
    {name: 'Buy a lot of apples in Tesco shoppinghouse', isCompleted: false},
    {name: 'Buy Smashing Book', isCompleted: false},
  ];
}
