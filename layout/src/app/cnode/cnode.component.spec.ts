import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnodeComponent } from './cnode.component';

describe('CnodeComponent', () => {
  let component: CnodeComponent;
  let fixture: ComponentFixture<CnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
