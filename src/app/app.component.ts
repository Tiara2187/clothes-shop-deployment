import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  spinnerType: string;
  spinnerName: string;

  constructor(private spinner: NgxSpinnerService) {
    this.spinnerName = 'sp4';
    this.spinnerType = 'cog';
    this.spinner.show(this.spinnerName);
    setTimeout(() => {
      this.spinner.hide(this.spinnerName);
    }, 5000);
  }
}


