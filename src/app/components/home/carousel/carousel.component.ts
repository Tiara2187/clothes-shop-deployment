import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(NgxGlideComponent, { static: false }) ngxGlide: NgxGlideComponent;
 
  play(): void {
    this.ngxGlide.play();
  }

}
