import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public hide = false;

  notification = {
    notification_content: 'Get commercial support for OpenEBS',
    notification_url: 'https://mayadata.io/mdap'
  };
  constructor() { }

  ngOnInit() {
  }
  public hideBanner() {
    this.hide = true;
  }
}
