import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise(async (resolve, reject) => {
      let email = control.value as string;
      await fetch('http://localhost:5000/validateEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response: any = []) => {
          return response.json();
        })
        .then((res: any = []) => {
          if (res.found) {
            resolve({ shouldBeUnique: false }); //i am resolving promise to be returned
          } else {
            resolve(null);
          }
        })
        .catch((err) => {
          if (err) {
            reject({
              error:
                'Could not resolve request , most likely the server is out of reach',
            });
          }
        });
    });
  }
}
