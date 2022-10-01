import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex01NgSwitchComponent } from './ex01-ng-switch.component';

describe('Ex01NgSwitchComponent', () => {
  let component: Ex01NgSwitchComponent;
  let fixture: ComponentFixture<Ex01NgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex01NgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex01NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
