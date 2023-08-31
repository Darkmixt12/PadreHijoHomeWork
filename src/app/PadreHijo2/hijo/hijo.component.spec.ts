import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoComponent2 } from './hijo.component';

describe('HijoComponent2', () => {
  let component: HijoComponent2;
  let fixture: ComponentFixture<HijoComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
