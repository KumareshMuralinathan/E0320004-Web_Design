import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KailashComponent } from './kailash.component';

describe('KailashComponent', () => {
  let component: KailashComponent;
  let fixture: ComponentFixture<KailashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KailashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KailashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
