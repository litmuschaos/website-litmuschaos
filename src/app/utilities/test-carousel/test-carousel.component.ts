import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-test-carousel',
  templateUrl: './test-carousel.component.html',
  styleUrls: ['./test-carousel.component.css']
})
export class TestCarouselComponent implements OnInit {

  workloadsObject = [
    {
      url: '/prometheus',
      imageUrl: 'assets/images/workloads/prometheus-n.png'
    },
    {
      url: '/gitlab',
      imageUrl: 'assets/images/workloads/gitlab-n.png'
    },
    {
      url: '/cassandra',
      imageUrl: 'assets/images/workloads/cassandra-n.png'
    },
    {
      url: '/minio',
      imageUrl: 'assets/images/workloads/minio-n.png'
    },
    {
      url: '/redis',
      imageUrl: 'assets/images/workloads/redis-n.png'
    },
    {
      url: '/nfs',
      imageUrl: 'assets/images/workloads/nfs-n.png'
    },
    {
      url: '/elasticsearch',
      imageUrl: 'assets/images/workloads/elasticsearch-n.png'
    },
    {
      url: '/mysql',
      imageUrl: 'assets/images/workloads/mysql-n.png'
    },
    {
      url: '/postgresql',
      imageUrl: 'assets/images/workloads/postgresql-n.png'
    },
    {
      url: '/percona',
      imageUrl: 'assets/images/workloads/percona-n.png'
    },
    {
      url: '/nuodb',
      imageUrl: 'assets/images/workloads/nuodb-n.png'
    },
    {
      url: '/mongodb',
      imageUrl: 'assets/images/workloads/mongodb-n.png'
    }];
  slideOptions = {
    dots: false,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 4
      },
      1200: {
        items: 6
      }
    },
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  };

  myCarouselOptions = { items: 6, dots: false, nav: true };

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

  }


}
