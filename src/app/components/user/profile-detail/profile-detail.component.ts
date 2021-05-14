import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared-Api/service/user.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  constructor(private userService: UserService) { }
  country: string;
  province: string;
  city : string;
  district: string;
  village : string;
  zip : number;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: Date;
  phone: string;
  address: string;

  ngOnInit(): void {
    this.userService.getUser().subscribe((res) => {
      this.username = res.data.username;
      this.firstname = res.data.firstname;
      this.lastname = res.data.lastname;
      this.email = res.data.email;
      this.birthdate = res.data.birthdate;
      this.phone = res.data.phone;
      this.address = res.data.address;
    })
    this.userService.getAddress().subscribe((res) => {
      this.country = res.data.country;
      this.district = res.data.district;
      this.province = res.data.province;
      this.village = res.data.village;
      this.zip = res.data.zip;
      this.city = res.data.city
    })
  }

}
