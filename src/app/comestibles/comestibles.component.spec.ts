import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarAlimentoComponent} from './comestibles.component';

describe('ComestiblesComponent', () => {
  let component: DonarAlimentoComponent;
  let fixture: ComponentFixture<DonarAlimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonarAlimentoComponent]
    });
    fixture = TestBed.createComponent(DonarAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
