import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgileService } from '../../services/agile.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  vancouverTag = 'OSSNA Reg Form ';
  now = new Date();
  upcomingEvents = [];
  isFormEmpty = false;
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  mdTag = 'OpenEBS OE Newsletter';
  constructor(private eventService: EventsService, private agileServices: AgileService, private router: Router) { }



  copyright_text = `Copyright &copy; ${(new Date()).getFullYear()} MayaData Inc.`;

  social_icons = [
    
    {
      src: 'assets/images/footer/tw.svg',
      alt: 'twitter',
      url: 'https://twitter.com/LitmusChaos'
    },
    {
      src: 'assets/images/footer/ln.svg',
      alt: 'linkedin',
      url: 'https://www.linkedin.com/company/openebs/'
    },
    {
      src: 'assets/images/footer/gh.svg',
      alt: 'github',
      url: 'https://github.com/litmuschaos'
    },
    {
      src: 'assets/images/footer/yt.svg',
      alt: 'youtube',
      url: 'https://www.youtube.com/channel/UC3ywadaAUQ1FI4YsHZ8wa0g'
    }
  ];

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
  }

  createForm() {
    this.leadForm = new FormGroup({
      email: this.email
    });
  }


  formSubmit() {
    if (this.email.errors == null) {
      this.agileServices.subscribeNewsletter(
        this.leadForm.value.email,
        this.mdTag
      );
      // this.notifySlack();
      this.leadForm.reset();
    }
    if (this.email.errors) {
      this.isFormEmpty = true;
    }
  }

}
