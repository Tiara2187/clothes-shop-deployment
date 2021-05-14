import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any;
  signupForm: FormGroup

  constructor(
    public formbuilder: FormBuilder, public userService : UserService) { 
    this.signupForm = this.formbuilder.group({
      username: [''],
      email: [''],
      phone: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  registerUser(){
    this.signupForm.setValue({
      username: '',
      email: '',
      phone: '',
      password: ''
    })
  }

  signUp() {
    this.user = this.signupForm.value;
      this.userService.signUp(this.user)
  }

}
