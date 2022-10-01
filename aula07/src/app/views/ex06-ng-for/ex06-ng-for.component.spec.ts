import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex06NgForComponent } from './ex06-ng-for.component';

describe('Ex06NgForComponent', () => {
  let component: Ex06NgForComponent;
  let fixture: ComponentFixture<Ex06NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex06NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex06NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
