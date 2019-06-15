import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractContainer, CustomValidators } from '../../../helpers';
import { EventHandlerService } from '../../../providers';
import { Store } from '@ngrx/store';
import { IState } from '../../../store';

@Component({
  selector: 'app-register',
  templateUrl: 'register.container.html',
  styleUrls: ['register.container.scss']
})

export class RegisterContainer extends AbstractContainer {
  public formGroup: FormGroup;

  public constructor(fb: FormBuilder, eventHandlerService: EventHandlerService) {
    super(eventHandlerService);
    this.formGroup = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: CustomValidators.MatchPassword
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this.handleEvent({
        type: 'auth',
        action: {
          type: 'register',
          payload: this.formGroup.value
        }
      });
    }
  }
}
