import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01NgifComponent } from './ex01-ngif.component';

describe('Ex01NgifComponent', () => {
  let component: Ex01NgifComponent;
  let fixture: ComponentFixture<Ex01NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex01NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
