import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagencentralComponent } from './imagencentral.component';

describe('ImagencentralComponent', () => {
  let component: ImagencentralComponent;
  let fixture: ComponentFixture<ImagencentralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagencentralComponent]
    });
    fixture = TestBed.createComponent(ImagencentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
