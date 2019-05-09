import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventCarouselComponent } from './upcoming-event-carousel.component';

describe('UpcomingEventCarouselComponent', () => {
  let component: UpcomingEventCarouselComponent;
  let fixture: ComponentFixture<UpcomingEventCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingEventCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingEventCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
