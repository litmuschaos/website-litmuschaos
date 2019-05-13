import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JoincommunityService } from '../services/joincommunity/joincommunity.service';

@Injectable()
export class JoincommunityGuard implements CanActivate {

  constructor(private router: Router, private joincommunityService: JoincommunityService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.joincommunityService.isFormSubmitted === false) {
      this.router.navigate(['join-our-community']);
    }
    return this.joincommunityService.isFormSubmitted;
  }
}
