import { Injectable } from '@angular/core';

@Injectable()
export class EventsService {

  constructor() { }

  events = [
    {
      event_url: 'https://events.linuxfoundation.org/events/kubernetes-day-india-2019',
      event_image: 'assets/images/Kubernetes_Day_Logo.png',
      event_image_alt: 'Kubernetes Day India',
      event_image_title: 'Kubernetes Day India',
      event_location: 'Bengaluru',
      event_display_date: 'March 23, 2019',
      event_start_time: new Date(Date.UTC(2019, 2, 23, 2, 0, 0, 0)),
      event_end_time: new Date(Date.UTC(2019, 2, 23, 11, 15, 0, 0))
    }
  ];
}

