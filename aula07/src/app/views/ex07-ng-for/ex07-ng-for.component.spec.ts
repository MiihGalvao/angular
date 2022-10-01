import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex07NgForComponent } from './ex07-ng-for.component';

describe('Ex07NgForComponent', () => {
  let component: Ex07NgForComponent;
  let fixture: ComponentFixture<Ex07NgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex07NgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex07NgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
