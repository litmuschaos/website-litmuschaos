import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AgileService } from '../../services/agile.service';
import { EventsService } from '../../services/events/events.service';

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

  communities = [
    {
      src: 'assets/images/footer/sl.svg',
      alt: 'slack',
      url: 'https://app.slack.com/client/T09NY5SBT/CNXNB0ZTN',
      name: 'Slack'
    },
    {
      src: 'assets/images/footer/gh.svg',
      alt: 'github',
      url: 'https://github.com/litmuschaos/litmus',
      name: 'GitHub'
    },
    {
      src: 'assets/images/footer/tw.svg',
      alt: 'twitter',
      url: 'https://twitter.com/LitmusChaos',
      name: 'Twitter'
    },
    {
      src: 'assets/images/footer/md.svg',
      alt: 'Blog',
      url: 'https://dev.to/t/litmuschaos/latest',
      name: 'Blog'
    },
    {
      src: 'assets/images/footer/md.svg',
      alt: 'YouTube',
      url: 'https://www.youtube.com/channel/UCa57PMqmz_j0wnteRa9nCaw ',
      name: 'YouTube'
    },
  ];

  resources = [
    {
      name: 'Docs',
      url: 'https://docs.litmuschaos.io/'
    },
    {
      name: 'FAQ',
      url: 'https://docs.litmuschaos.io/docs/faq-general/'
    },
    {
      name: 'Issues',
      url: 'https://github.com/litmuschaos/litmus/issues'
    },
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
