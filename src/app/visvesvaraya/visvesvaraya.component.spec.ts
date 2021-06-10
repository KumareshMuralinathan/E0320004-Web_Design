import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisvesvarayaComponent } from './visvesvaraya.component';

describe('VisvesvarayaComponent', () => {
  let component: VisvesvarayaComponent;
  let fixture: ComponentFixture<VisvesvarayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisvesvarayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisvesvarayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
