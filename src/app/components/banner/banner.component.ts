import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public hide = false;

  notification = {
    notification_content: 'REGISTER for FREE Kubernetes and OpenEBS Technical Workshop at Kubecon',
    notification_url: 'https://go.mayadata.io/openebs-meet-kubecon-sandiego'
  };
  constructor() { }

  ngOnInit() {
  }
  public hideBanner() {
    this.hide = true;
  }
}
