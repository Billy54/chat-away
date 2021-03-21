import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise(async (resolve, reject) => {
      let email = control.value as string;
      await fetch('https://chat-app-ang.herokuapp.com', {
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
          console.log(res);
          if (res.found) {
            resolve({ shouldBeUnique: false });
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
