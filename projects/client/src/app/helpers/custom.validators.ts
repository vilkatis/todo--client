import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  public static MatchPassword(abstractControl: AbstractControl) {
    const password: string = abstractControl.get('password').value;
    const confirmPassword: string = abstractControl.get('confirmPassword').value;
    if (password !== confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
