import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public userService: UserService,
    public router: Router
  ) { 
    this.signinForm = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  loginUser(){
    this.userService.signIn(this.signinForm.value)
    this.signinForm.setValue({
      email: '',
      password: ''
    })
  }
  

}
