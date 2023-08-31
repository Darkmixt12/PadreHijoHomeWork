import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbueloComponent2 } from './abuelo.component';

describe('AbueloComponent', () => {
  let component: AbueloComponent2;
  let fixture: ComponentFixture<AbueloComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbueloComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbueloComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
