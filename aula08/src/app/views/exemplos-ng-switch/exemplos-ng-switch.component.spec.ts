import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosNgSwitchComponent } from './exemplos-ng-switch.component';

describe('ExemplosNgSwitchComponent', () => {
  let component: ExemplosNgSwitchComponent;
  let fixture: ComponentFixture<ExemplosNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemplosNgSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemplosNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
