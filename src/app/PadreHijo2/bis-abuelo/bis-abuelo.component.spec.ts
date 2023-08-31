import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisAbueloComponent } from './bis-abuelo.component';

describe('BisAbueloComponent', () => {
  let component: BisAbueloComponent;
  let fixture: ComponentFixture<BisAbueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BisAbueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BisAbueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
