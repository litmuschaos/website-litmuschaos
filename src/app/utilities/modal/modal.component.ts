import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MinLengthValidator } from '@angular/forms';
import { AgileService } from '../../services/agile.service';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() getTag: any;
  @Output() isFormChange = new EventEmitter<boolean>();

  // setFormChange_leads = true;
  leadForm: FormGroup;
  name: FormControl;
  email: FormControl;
  companyname: FormControl;
  setFormChange_vancouver: boolean = true;
  isFormEmpty: boolean = false;
  mTag: any;

  constructor(private agileServices: AgileService) { }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.mTag = this.getTag;
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);
    this.companyname = new FormControl();
  }

  createForm() {
    this.leadForm = new FormGroup({
      name: this.name,
      email: this.email,
      companyname: this.companyname
    });
  }

  // notifySlack() {
  //   // $('#slacksubmit').click(function () {
  //   var fields = [
  //     {
  //       "title": "Name",
  //       "value": $('#agilefield-1').val(),
  //       "short": true
  //     },
  //     {
  //       "title": "Email",
  //       "value": $('#agilefield-2').val(),
  //       "short": false
  //     },
  //     {
  //       "title": "Tag",
  //       "value": this.mTag,
  //       "short": false
  //     }
  //   ];
  //   var payload = {

  //     "text": "New Subscriber for OpenEBS Newsletter",
  //     "attachments": [
  //       {
  //         "text": "",
  //         "fields": fields
  //       }
  //     ]
  //   };
  //   var payloadToSend = JSON.stringify(payload)
  //   var host = window.location.host;
  //   if (host == 'openebs.io' || host == 'www.openebs.io') {
  //     var webhookURL = "https://hooks.slack.com/services/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"; // main
  //   } else {
  //     var webhookURL = "https://hooks.slack.com/services/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" // testing
  //   }
  //   $.ajax({
  //     url: webhookURL,
  //     type: "POST",
  //     processData: true,
  //     data: payloadToSend,
  //     dataType: "JSON",
  //     success: function (data) {
  //     },
  //     error: function (data) {
  //     }
  //   });

  //   // });
  // }

  formSubmit() {

    if (this.name.errors == null && this.email.errors == null) {
      this.agileServices.addPost(this.leadForm.value.name, this.leadForm.value.email, 'NA', this.getTag);
      // this.notifySlack();
      this.leadForm.reset();
      this.toggleview();
    }
    if (this.name.errors || this.email.errors) {
      this.isFormEmpty = true;
    }
  }

  toggleview() {
    this.setFormChange_vancouver = false;
    this.isFormChange.emit(this.setFormChange_vancouver);
  }

}
