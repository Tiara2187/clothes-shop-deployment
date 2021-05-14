import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerShoppingComponent } from './banner-shopping.component';

describe('BannerShoppingComponent', () => {
  let component: BannerShoppingComponent;
  let fixture: ComponentFixture<BannerShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
