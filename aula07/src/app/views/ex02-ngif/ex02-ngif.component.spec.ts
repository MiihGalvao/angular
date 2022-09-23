import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02NgifComponent } from './ex02-ngif.component';

describe('Ex02NgifComponent', () => {
  let component: Ex02NgifComponent;
  let fixture: ComponentFixture<Ex02NgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex02NgifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex02NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
