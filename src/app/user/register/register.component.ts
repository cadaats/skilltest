import { Component } from '@angular/core';
import { User } from '../user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  registerForm = new FormGroup({
    fName: new FormControl("",[Validators.required, Validators.minLength(3), Validators.pattern('[A-Za-z].*')]),
    lNames: new FormControl("",[Validators.required, Validators.minLength(5), Validators.pattern('[A-Za-z].*')]),
    email: new FormControl("",[Validators.required, Validators.email]),
    pwd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('[A-Za-z*&@]*')]),
    repwd: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern('[A-Za-z*&@]*')])
  });

  get firstName() { return this.registerForm.get('fName') as FormControl; }
  get lastName() { return this.registerForm.get('lNames') as FormControl; }
  get email() { return this.registerForm.get('email') as FormControl; }
}
