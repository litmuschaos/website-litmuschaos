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
  private host:any;
  private githubApiurl;
  notification = {
    notification_content: 'Get OpenEBS Commercial Support',
    notification_url: 'https://mayadata.io/mdap'
  };

  constructor(private http: HttpClient) {
    this.host = window.location.host;
    if ((this.host.toString().indexOf("localhost") + 1) && this.host.toString().indexOf(":")) {
      this.githubApiurl = "http://localhost:3000/";

    } else {
      this.githubApiurl = "/github";
    }
   }

  ngOnInit() {
    this.http.get(this.githubApiurl+'/getstars').subscribe(res => this.starCount=res["star-count"]);
    console.log(this.starCount);
  }

}
