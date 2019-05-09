import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public hide = false;

  notification = {
    notification_content: 'Get OpenEBS Commercial Support',
    notification_url: 'https://mayadata.io/mdap'
  };

  constructor() { }

  ngOnInit() {
  }

}
