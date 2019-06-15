import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss']
})

export class InputComponent {
  @Input() public name: string;
  @Input() public type: string = 'text';
  @Input() public icon: string = 'user';
  @Input() public parentFormGroup: FormGroup;
  @Input() public controlName: string;
}
