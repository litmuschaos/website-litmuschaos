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
  isFormEmpty = false;

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
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      company: this.company,
    });
  }

  formSubmit() {
    if ((this.name.errors == null) && (this.email.errors == null) && (this.company.errors == null)) {
      const data = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        company: this.contactForm.value.company
      };
      this.agileService.sendDatasToOpenEBSBackendForJoinLitmusOurCommunity(data);
      this.joincommunityService.isFormSubmitted = true;
      this.router.navigate(['thankyou-join-our-community']);
      console.log(JSON.stringify(data)+ ' Success');
    }
    if (this.name.errors || this.email.errors || this.company.errors) {
      this.isFormEmpty = true;
    }
  }
}
