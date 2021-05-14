import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDisconComponent } from './banner-discon.component';

describe('BannerDisconComponent', () => {
  let component: BannerDisconComponent;
  let fixture: ComponentFixture<BannerDisconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerDisconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDisconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
