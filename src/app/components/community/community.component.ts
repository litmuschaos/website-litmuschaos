import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgileService } from '../../services/agile.service';
import { JoincommunityService } from '../../services/joincommunity/joincommunity.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  bgImageUrl = 'assets/images/community/bg.png';
  contactForm: FormGroup;
  name: FormControl;
  email: FormControl;
  company: FormControl;
  subscribeNewsletterCheck: FormControl;
  demoCheck: FormControl;
  usecasesAndPricingForCommercialSupportCheck: FormControl;
  isFormEmpty = false;
  mdTag = 'Community_Email';

  join_our_community = [
    {
      title: 'Join our Litmus Channel on OpenEBS community on Slack',
      icon: 'assets/images/icons/join-our-community-icon1.svg',
      lists: [
      `The simple and easy way to do this is by signing up for the OpenEBS Community on Slack and joiniing the Litmus Channel.`,
      `You can join by simply filling up the form`,
      'It is a very responsive community. You will get a response within 3 to 6 hours.', 
      `<a style="color:#000"
       href="https://github.com/litmuschaos/litmus/issues" target="_blank" rel="noopener">Litmus on GitHub</a>
       is also a great way to get help.`]
    },
    {
      title: 'Already an OpenEBS Community Member',
      icon: 'assets/images/community/slack.png',
      lists: ['<a href="https://openebs-community.slack.com/messages/CHK0CULN6" target="_blank" rel="noopener"><button type="submit" class="btn btn-purple">Sign In</button></a>'
      ]
    },

  ];
  constructor(private router: Router, private agileService: AgileService,
    private joincommunityService: JoincommunityService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.company = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.subscribeNewsletterCheck = new FormControl(true);
    this.demoCheck = new FormControl('');
    this.usecasesAndPricingForCommercialSupportCheck = new FormControl('');
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      company: this.company,
      subscribeNewsletterCheck: this.subscribeNewsletterCheck,
      demoCheck: this.demoCheck,
      usecasesAndPricingForCommercialSupportCheck: this.usecasesAndPricingForCommercialSupportCheck
    });
  }

  formSubmit() {
    if ((this.name.errors == null) && (this.email.errors == null) && (this.company.errors == null)) {
      console.log(this.contactForm.value.subscribeNewsletterCheck);
      const data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        company: this.contactForm.value.company,
        subscribeNewsletterCheck: null,
        demoCheck: null,
        usecasesAndPricingForCommercialSupportCheck: null,
        addTag: this.mdTag
      };
      this.agileService.sendDatasToOpenEBSBackendForJoinOurCommunity(data);
      this.joincommunityService.isFormSubmitted = true;
      this.joincommunityService.isDemoChecked = this.contactForm.value.demoCheck;
      this.joincommunityService.isSubscribeNewsletterChecked = this.contactForm.value.subscribeNewsletterCheck;
      this.router.navigate(['thankyou-join-our-community']);
      console.log('Success');
    }
    if (this.name.errors || this.email.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
  }
}
