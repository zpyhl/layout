import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolyCupComponent } from './holy-cup.component';

describe('HolyCupComponent', () => {
  let component: HolyCupComponent;
  let fixture: ComponentFixture<HolyCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolyCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolyCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
