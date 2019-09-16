import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public hide = false;
  public starCount:number = 0;
  notification = {
    notification_content: 'Get OpenEBS Commercial Support',
    notification_url: 'https://mayadata.io/mdap'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://localhost:8080/getstars").subscribe(res => this.starCount=res["star-count"]);
    console.log(this.starCount);
  }

}
