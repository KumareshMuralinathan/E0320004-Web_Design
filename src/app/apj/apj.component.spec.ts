import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApjComponent } from './apj.component';

describe('ApjComponent', () => {
  let component: ApjComponent;
  let fixture: ComponentFixture<ApjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
