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
      url: 'https://twitter.com/LitmusChaos',
      name: 'Twitter'
    },
    {
      src: 'assets/images/footer/ln.svg',
      alt: 'Blog',
      url: 'https://blog.openebs.io/tagged/litmus',
      name:"Blog"
    },
    {
      src: 'assets/images/footer/gh.svg',
      alt: 'Docs',
      url: 'https://docs.litmuschaos.io/',
      name: 'Docs'
    },
    {
      src: 'assets/images/footer/gh.svg',
      alt: 'MayadataHelpCenter',
      url: 'https://help.mayadata.io',
      name: 'MayaDataHelpCenter'
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
