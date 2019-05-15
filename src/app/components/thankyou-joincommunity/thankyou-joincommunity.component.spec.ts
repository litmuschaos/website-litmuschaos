import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouJoincommunityComponent } from './thankyou-joincommunity.component';

describe('ThankyouJoincommunityComponent', () => {
  let component: ThankyouJoincommunityComponent;
  let fixture: ComponentFixture<ThankyouJoincommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouJoincommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouJoincommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
