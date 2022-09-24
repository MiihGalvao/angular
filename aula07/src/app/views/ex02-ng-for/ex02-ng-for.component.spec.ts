import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex02NgForComponent } from './ex02-ng-for.component';

describe('Ex02NgForComponent', () => {
  let component: Ex02NgForComponent;
  let fixture: ComponentFixture<Ex02NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex02NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex02NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
