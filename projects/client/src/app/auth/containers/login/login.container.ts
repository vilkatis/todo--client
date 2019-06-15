import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractContainer } from '../../../helpers';
import { EventHandlerService } from '../../../providers';

@Component({
  selector: ' app-login',
  templateUrl: 'login.container.html',
  styleUrls: ['login.container.scss']
})

export class LoginContainer extends AbstractContainer {
  public formGroup: FormGroup;

  public constructor(fb: FormBuilder, eventHandlerService: EventHandlerService) {
    super(eventHandlerService);
    this.formGroup = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.formGroup.valid) {
      this.handleEvent({
        type: 'auth',
        action: {
          type: 'login',
          payload: this.formGroup.value
        }
      });
    }
  }
}
