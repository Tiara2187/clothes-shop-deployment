import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomentProductComponent } from './recoment-product.component';

describe('RecomentProductComponent', () => {
  let component: RecomentProductComponent;
  let fixture: ComponentFixture<RecomentProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomentProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
