import { Component, OnInit, ViewChild, Renderer2  } from '@angular/core';
import { JoincommunityService } from '../../services/joincommunity/joincommunity.service';

@Component({
  selector: 'app-thankyou-joincommunity',
  templateUrl: './thankyou-joincommunity.component.html',
  styleUrls: ['./thankyou-joincommunity.component.css']
})
export class ThankyouJoincommunityComponent implements OnInit {
  @ViewChild('demo3') demmo
  @ViewChild('demo2') demo2
  bgImageUrl = 'assets/images/thankyou/bg.png';
  constructor(private Joincommunity: JoincommunityService , private rendrer: Renderer2) { }

  ngOnInit() {
    console.log(this.Joincommunity.isDemoChecked);
    if ( this.Joincommunity.isDemoChecked) {
    this.rendrer.setStyle(this.demmo.nativeElement, 'display', 'flex');
  } 
   else {
    console.log("jiuh");
    this.rendrer.setStyle(this.demmo.nativeElement, 'display', 'none');
  }
  if ( this.Joincommunity.isSubscribeNewsletterChecked) {
    this.rendrer.setStyle(this.demo2.nativeElement, 'display', 'flex');
  } 
   else {
    this.rendrer.setStyle(this.demo2.nativeElement, 'display', 'none');
  }
  }

}
