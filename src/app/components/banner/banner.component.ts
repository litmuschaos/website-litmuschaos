import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public hide = false;

  notification = {
    notification_content: 'MayaData is celebrating Hacktoberfest 2019 with OpenEBS and Litmus',
    notification_url: 'https://mayadata.io/hacktoberfest'
  };
  constructor() { }

  ngOnInit() {
  }
  public hideBanner() {
    this.hide = true;
  }
}
