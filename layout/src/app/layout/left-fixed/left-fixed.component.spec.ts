import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftFixedComponent } from './left-fixed.component';

describe('LeftFixedComponent', () => {
  let component: LeftFixedComponent;
  let fixture: ComponentFixture<LeftFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
