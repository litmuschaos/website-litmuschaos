import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-upcoming-event-carousel',
  templateUrl: './upcoming-event-carousel.component.html',
  styleUrls: ['./upcoming-event-carousel.component.css']
})
export class UpcomingEventCarouselComponent implements OnInit {


  slides: {
    eventLocation: string, eventImage: string, eventURL: string,
    eventStartDate: Date, eventEndDate: Date
  }[] = [];
  showNavigationArrows = true;
  showNavigationIndicators = true;

  events = [
    {
      eventLocation: 'Benguluru',
      eventImage: 'assets/images/Kubernetes_Day_Logo.png',
      eventURL: 'https://events.linuxfoundation.org/events/kubernetes-day-india-2019/',
      eventTime: '23 March 2019',
      eventStartDate: new Date('2019-03-23'),
      eventEndDate: new Date('2019-03-23')
    },
    {
      eventLocation: 'San Francisco',
      eventImage: 'assets/images/Redis-Conf-19.png',
      eventURL: 'https://redislabs.com/redisconf19/',
      eventTime: '2-3 April 2019',
      eventStartDate: new Date('2019-04-02'),
      eventEndDate: new Date('2019-04-04')
    },
    {
      eventLocation: 'Barcelona',
      eventImage: 'assets/images/kccnc-eu-2019-dark.png',
      eventTime: '20-23 May 2019',
      eventURL: 'https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/',
      eventStartDate: new Date('2019-05-20'),
      eventEndDate: new Date('2019-05-24')
    },
    {
      eventLocation: 'Shanghai',
      eventImage: 'assets/images/event-logos/kubecon-china.png',
      eventTime: '24-26 June 2019',
      eventURL: 'https://www.lfasiallc.com/events/kubecon-cloudnativecon-china-2019/',
      eventStartDate: new Date('2019-06-24'),
      eventEndDate: new Date('2019-06-27')
    },
    {
      eventLocation: 'Hamburg',
      eventImage: 'assets/images/event-logos/container-days.png',
      eventTime: '24-26 June 2019',
      eventURL: 'https://www.containerdays.io/speakers/',
      eventStartDate: new Date('2019-06-24'),
      eventEndDate: new Date('2019-06-27')
    }
  ];

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    // config.showNavigationArrows = true;
    // config.showNavigationIndicators = true;

    this.slides = this.events.filter(event => event.eventEndDate > new Date()).sort(
      (date1, date2) => (date1.eventEndDate.getTime() - date2.eventEndDate.getTime())
    );
  }
  ngOnInit() {
  }
}
