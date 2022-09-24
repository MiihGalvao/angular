import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01NgForComponent } from './ex01-ng-for.component';

describe('Ex01NgForComponent', () => {
  let component: Ex01NgForComponent;
  let fixture: ComponentFixture<Ex01NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex01NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
