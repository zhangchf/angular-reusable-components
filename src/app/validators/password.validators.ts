import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static correctPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout((password: String) => {
                console.log(password);
                if (password == "chaofan") {
                    resolve(null);
                } else {
                    resolve({
                        correctPassword: true
                    })
                }
            }, 3000, control.value);
        })
    }
}