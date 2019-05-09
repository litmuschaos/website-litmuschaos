import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackthonHomeComponent } from './hackthon-home.component';

describe('HackthonHomeComponent', () => {
  let component: HackthonHomeComponent;
  let fixture: ComponentFixture<HackthonHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackthonHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackthonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
