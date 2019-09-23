import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hacktoberfest2019Component } from './hacktoberfest2019.component';

describe('Hacktoberfest2019Component', () => {
  let component: Hacktoberfest2019Component;
  let fixture: ComponentFixture<Hacktoberfest2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hacktoberfest2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hacktoberfest2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
