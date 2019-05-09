import { Injectable } from '@angular/core';

@Injectable()
export class WebinarService {
  isFormSubmited = false;
  isRegistered = false;
  constructor() {
  }
  selectedWebinar = '';
  allWebinars = ['Webinar 1 : India', 'Webinar 2 : Europe - USA East', 'Webinar 3 : USA West - ANZ'];
  webinarDetails = {
    webinar1: {
      details: {
        name: 'Webinar 1 : India',
        timeZones: [
          '(7th March,2019): 03:00 PM (Indian Standard Time)',
          '(7th March,2019): 09:30 AM (Greenwich Mean Time)'
        ],
        url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20190307T093000&p1=tz_gmt&p2=tz_ist'
      },
      speakers: [
        {
          'image_url': 'assets/images/webinar/uma.jpg',
          'image_alt': 'uma-mukkara',
          'image_title': 'Uma Mukkara',
          'name': 'Uma Mukkara',
          'designation': 'COO',
          'company': 'MayaData Inc',
          'mcofwebinar': 'MC of Webinar 1'
        },
        {
          'image_url': 'assets/images/webinar/kiran-mova.jpeg',
          'image_alt': 'kiran-mova',
          'image_title': 'Kiran Mova',
          'name': 'Kiran Mova',
          'designation': 'Customer Success',
          'company': 'MayaData Inc',
          'mcofwebinar': ''
        }
      ]
    },
    webinar2: {
      details: {
        name: 'Webinar 2 : Europe - USA East',
        timeZones: [
          '(12th March,2019): 02:00 PM (Greenwich Mean Time)',
          '(12th March,2019): 10:00 AM (Eastern Daylight Time)',
          '(12th March,2019): 07:00 AM (Pacific Daylight Time)'
        ],
        url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20190312T140000&p1=tz_gmt&p2=tz_edt&p3=tz_pdt'
      },
      speakers: [
        {
          'image_url': 'assets/images/webinar/evan-powell.png',
          'image_alt': 'evan-powell',
          'image_title': 'Evan Powell',
          'name': 'Evan Powell',
          'designation': 'CEO',
          'company': 'MayaData Inc',
          'mcofwebinar': 'MC of Webinar 2'
        },
        {
          'image_url': 'assets/images/webinar/murat.jpeg',
          'image_alt': 'murat-karslioglu',
          'image_title': 'Murat Karslioglu',
          'name': 'Murat Karslioglu',
          'designation': 'VP Of Solutions',
          'company': 'MayaData Inc',
          'mcofwebinar': ''
        },
        {
          'image_url': 'assets/images/webinar/patrick.png',
          'image_alt': 'patrick-hoolboom ',
          'image_title': 'Patrick Hoolboom ',
          'name': 'Patrick Hoolboom ',
          'designation': 'Developer Advocate',
          'company': 'MayaData Inc',
          'mcofwebinar': ''
        }
      ]
    },
    webinar3: {
      details: {
        name: 'Webinar 3 : USA West - ANZ',
        timeZones: [
          '(13th March,2019): 10:00 PM (Greenwich Mean Time)',
          '(13th March,2019): 03:00 PM (Pacific Daylight Time)',
          '(13th March,2019): 06:00 PM (Eastern Daylight Time)',
          '(14th March,2019): 09:00 AM (Australian Eastern Daylight Time)'
        ],
        url: 'https://www.timeanddate.com/worldclock/converter.html?iso=20190313T220000&p1=tz_gmt&p2=tz_edt&p3=tz_pdt&p4=tz_aet'
      },
      speakers: [
        {
          'image_url': 'assets/images/webinar/evan-powell.png',
          'image_alt': 'evan-powell',
          'image_title': 'Evan Powell',
          'name': 'Evan Powell',
          'designation': 'CEO',
          'company': 'MayaData Inc',
          'mcofwebinar': 'MC of Webinar 3'
        },
        {
          'image_url': 'assets/images/webinar/patrick.png',
          'image_alt': 'patrick-hoolboom ',
          'image_title': 'Patrick Hoolboom ',
          'name': 'Patrick Hoolboom ',
          'designation': 'Developer Advocate',
          'company': 'MayaData Inc',
          'mcofwebinar': ''
        },
        {
          'image_url': 'assets/images/webinar/murat.jpeg',
          'image_alt': 'murat-karslioglu',
          'image_title': 'Murat Karslioglu',
          'name': 'Murat Karslioglu',
          'designation': 'VP Of Solutions',
          'company': 'MayaData Inc',
          'mcofwebinar': ''
        }
      ]
    },
    speakers: [{
      'image_url': 'assets/images/webinar/evan-powell.png',
      'image_alt': 'evan-powell',
      'image_title': 'Evan Powell',
      'name': 'Evan Powell',
      'designation': 'CEO',
      'company': 'MayaData Inc'
    },
    // {
    //   'image_url': 'assets/images/webinar/uma.jpg',
    //   'image_alt': 'uma-mukkara',
    //   'image_title': 'Uma Mukkara',
    //   'name': 'Uma Mukkara',
    //   'designation': 'COO',
    //   'company': 'MayaData Inc'
    // },
    // {
    //   'image_url': 'assets/images/webinar/kiran-mova.jpeg',
    //   'image_alt': 'kiran-mova',
    //   'image_title': 'Kiran Mova',
    //   'name': 'Kiran Mova',
    //   'designation': 'Customer Success',
    //   'company': 'MayaData Inc'
    // },
    {
      'image_url': 'assets/images/webinar/murat.jpeg',
      'image_alt': 'murat-karslioglu',
      'image_title': 'Murat Karslioglu',
      'name': 'Murat Karslioglu',
      'designation': 'VP Of Solutions',
      'company': 'MayaData Inc'
    },
    {
      'image_url': 'assets/images/webinar/patrick.png',
      'image_alt': 'patrick-hoolboom ',
      'image_title': 'Patrick Hoolboom ',
      'name': 'Patrick Hoolboom ',
      'designation': 'Developer Advocate',
      'company': 'MayaData Inc'
    }]
  };

}
