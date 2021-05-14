import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { UpdateUser } from '../../Shared-Api/models/User';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  address: any
  addressForm : FormGroup

  personalForm = new FormGroup({
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    birthdate: new FormControl(''),
    address: new FormControl('')

  })

  constructor(private route: ActivatedRoute, public formbuilder : FormBuilder, private userService : UserService) {
    this.addressForm = this.formbuilder.group({
      country : [''],
      province : [''],
      city : [''],
      district : [''],
      village : [''],
      zip : [''],
    })
   }

  ngOnInit(): void {
  }

  updateUser() : void{
    const user : UpdateUser = {
      firstname : this.personalForm.get('firstname').value,
      lastname : this.personalForm.get('lastname').value,
      password : this.personalForm.get('password').value,
      birthdate : this.personalForm.get('birthdate').value,
      address : this.personalForm.get('address').value
    };
    this.userService.updateUser(user).subscribe(res => {
      Swal.fire('Success', 'Update Profile','success').then(res => {location.reload()})
    })
  }
  createAddress(): void {
    this.address = this.addressForm.value;
    this.userService.createAddress(this.address)
  }

}
