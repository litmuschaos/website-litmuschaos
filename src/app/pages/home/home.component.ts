import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public copyText1: string = "Copy";
  public copyText2: string = "Copy";
  public copyText3: string = "Copy";
  public helmCommand: string = ` helm repo add litmuschaos https://litmuschaos.github.io/chaos-charts \
  helm repo update \
  helm install litmuschaos/litmusInfra --namespace=litmus \
  `
  constructor() { }

  communities = [
    {
      src: 'assets/images/community/slack-new-logo.svg',
      alt: 'slack',
      url: 'https://app.slack.com/client/T09NY5SBT/CNXNB0ZTN',
      name: 'Slack'
    },
    {
      src: 'assets/images/community/github-1.svg',
      alt: 'github',
      url: 'https://github.com/litmuschaos',
      name: 'GitHub'
    },
    {
      src: 'assets/images/community/twitter-3.svg',
      alt: 'twitter',
      url: 'https://twitter.com/LitmusChaos',
      name: 'Twitter'
    },
    {
      src: 'assets/images/community/devto.svg',
      alt: 'DEV',
      url: 'https://dev.to/t/litmuschaos/latest',
      name: 'DEV'
    },
    {
      src: 'assets/images/community/youtube-3.svg',
      alt: 'Youtube',
      url: 'https://www.youtube.com/channel/UCa57PMqmz_j0wnteRa9nCaw ',
      name: 'YouTube'
    },
  ];

  adopters = [
    {
      name: 'Zebrium',
      src: 'assets/images/adopters/zebrium.webp',
      width: '200',
    },
    {
      name: 'OpenEBS',
      src: 'assets/images/adopters/openebs-alternative.png',
      width: '200',
    },
    {
      name: 'Wipro',
      src: 'assets/images/adopters/wipro.png',
      width: '100',
    },
    {
      name: 'Intuit',
      src: 'assets/images/adopters/intuit.webp',
      width: '120',
    },
  ]


  ngOnInit() {
    $('i[rel="pre"]').replaceWith(function () {
      return $('<pre><code>' + $(this).html() + '</code></pre>');
    });
    var pres = document.querySelectorAll('pre,kbd,blockquote');
    for (var i = 0; i < pres.length; i++) {
      pres[i].addEventListener("dblclick", function () {
        var selection = getSelection();
        var range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);
      }, false);
    }
  }
  public CopyButton1() {
    this.copyText1 = "Copied"
  }
  public CopyButton2() {
    this.copyText2 = "Copied"
  }
  public CopyButton3() {
    this.copyText3 = "Copied"
  }

}
