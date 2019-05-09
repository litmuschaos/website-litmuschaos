import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { contactDetails, ContactDetailsForWebinar, ContactDetailsForJoinOurCommunity, NewsletterSubscriber } from './agile.model';

@Injectable()

export class AgileService {

  private contactAdd: contactDetails[] = [];
  private newsletterSubscriber: NewsletterSubscriber[] = [];
  private contactUpdated = new Observable<contactDetails[]>();
  private apiurl: string;
  host: string;
  private contactDetailsForWebinar: ContactDetailsForWebinar[] = [];
  private contactDetailsForJoinOurCommunity: ContactDetailsForJoinOurCommunity[] = [];
  constructor(private http: HttpClient) {

    this.host = window.location.host;
    if (this.host === 'localhost:4200') {
      this.apiurl = 'http://localhost:3000/';
      // this.apiurl = 'https://openebs.io/api/';
    } else if (this.host === 'staging.openebs.io') {
      this.apiurl = 'https://openebs.io/api/';
    } else {
      this.apiurl = 'https://mayadata.io/api/';
    }
  }

  getPosts() {
    this.http
      .get<{ message: string; posts: contactDetails[] }>(
        this.apiurl + 'openebs/formsubmit'
      )
      .subscribe(postData => {
        this.contactAdd = postData.posts;
      });
  }

  addPost(firstName: string, emailId: string, companyName: string, addtag: string) {
    const contactAdd: contactDetails = { name: firstName, email: emailId, company: companyName, tag: addtag };
    this.http
      .post<{ message: string }>(this.apiurl + 'openebs/formsubmit', contactAdd)
      .subscribe(responseData => {
        this.contactAdd.push(contactAdd);
      });
  }

  subscribeNewsletter(emailId: string, addtag: string) {
    const newsletterSubscriber: NewsletterSubscriber = { email: emailId, tag: addtag };
    this.http
      .post<{ message: string }>(this.apiurl + 'openebs/formsubmit', newsletterSubscriber)
      .subscribe(responseData => {
        console.log('success');
        this.newsletterSubscriber.push(newsletterSubscriber);
      });
  }

  sendDatasToOpenEBSBackend(data) {
    // getting data and storing it to ContactDetailsForContactUs Object
    const ContactDetails: ContactDetailsForWebinar = {
      name: data.name,
      email: data.email,
      company: data.company,
      slackInvitationCheck: data.slackInvitationCheck,
      newsletterSubscriptionCheck: data.newsletterSubscriptionCheck,
      tag: data.addTag
    };
    // Send data to MayaData Backend at end point of /submitform/submit
    this.http.post<{ message: string }>(this.apiurl + 'webinar/formsubmit', ContactDetails)
      .subscribe(response => {
        this.contactDetailsForWebinar.push(ContactDetails);
      });
  }

  sendDatasToOpenEBSBackendForJoinOurCommunity(data) {
    const ContactDetails: ContactDetailsForJoinOurCommunity = {
      name: data.name,
      email: data.email,
      company: data.company,
      subscribeNewsletterCheck: data.subscribeNewsletterCheck,
      demoCheck: data.demoCheck,
      usecasesAndPricingForCommercialSupportCheck: data.usecasesAndPricingForCommercialSupportCheck,
      tag: data.addTag
    };

    this.http.post<{ message: string }>(this.apiurl + 'joinourcommunity/formsubmit', ContactDetails)
      .subscribe(response => {
        this.contactDetailsForJoinOurCommunity.push(ContactDetails);
      });
  }

}
