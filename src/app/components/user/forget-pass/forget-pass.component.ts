import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ForgetPass } from '../../Shared-Api/models/User';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {
  forgetpassForm: FormGroup

  constructor( private userService : UserService, private route: ActivatedRoute,
    public formbuilder: FormBuilder
  ) { 
    this.forgetpassForm = this.formbuilder.group({
      username: [''],
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  forgetpassUser(){
    this.forgetpassForm.setValue({
      username: '',
      email: '',
      password: ''
    })
  }

  forgetPass(): void{
    const user : ForgetPass = {
      username : this.forgetpassForm.get('username').value,
      password : this.forgetpassForm.get('password').value,
      email : this.forgetpassForm.get('email').value
    };
    this.userService.forgetPass(user).subscribe(res => {
      Swal.fire('Good','Update Success','success').then(res =>{location.reload()})
    })

  }
}
