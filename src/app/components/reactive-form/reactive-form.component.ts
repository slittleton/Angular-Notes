import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { userNameValidator } from '../../shared/user-name.validator';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  // the second item in the field array is where you specify the validators
  registrationForm = this.fb.group({
    userName: ['John', [Validators.required, Validators.minLength(3), userNameValidator]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })


  // registrationForm = new FormGroup({
  //     userName: new FormControl('JohnDoe'),
  //     password: new FormControl('Pass'),
  //     confirmPassword: new FormControl('Pass'),
  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       postalCode: new FormControl(''),

  //     })
  //   }
  // );




  ngOnInit(): void {
    // console.log(this.registrationForm)
    let isValid = this.registrationForm.controls?.['userName'].valid

    // console.log("Checking if valid")
    // console.log(isValid)
  }

  loadApi() {
    // setValue -accepts an object that matches the structure of the FormGroup
    // with the control names as keys
    this.registrationForm.setValue({
      userName: 'Joe',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Phoenix',
        state: 'AZ',
        postalCode: '85304',
      }
    })

    // patchValue allows you to set any number of the fields that you want instead of needing to set all the fields
    this.registrationForm.patchValue({
      userName: 'admin'
    })

    console.log(this.registrationForm.get('userName'))
  }

  isUserNameValid() {
    let isValid = this.registrationForm.get('username')?.invalid && this.registrationForm.get('userName')?.touched;
    // console.log(isValid)
    return isValid
  }
}
