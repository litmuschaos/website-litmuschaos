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
