import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mustMatch(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let confirmPassword = control.value as string;
    let password = localStorage.getItem('pass') as string;

    if (confirmPassword != password) {
      return { mustMatch: false };
    }
    return null;
  };
}
