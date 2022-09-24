import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex03NgifComponent } from './ex03-ngif.component';

describe('Ex03NgifComponent', () => {
  let component: Ex03NgifComponent;
  let fixture: ComponentFixture<Ex03NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex03NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex03NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
