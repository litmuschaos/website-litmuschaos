import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import {
  FormsModule,
  FormGroup,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './components/banner/banner.component';

import { JoincommunityGuard } from './guards/joincommunity.guard';

import { ModalComponent } from './utilities/modal/modal.component';
import { ModalSuccessComponent } from './utilities/modal-success/modal-success.component';
import { UpcomingEventCarouselComponent } from './utilities/upcoming-event-carousel/upcoming-event-carousel.component';
import { TestCarouselComponent } from './utilities/test-carousel/test-carousel.component';

import { AgileService } from './services/agile.service';
import { WebinarService } from './services/webinar/webinar.service';
import { JoincommunityService } from './services/joincommunity/joincommunity.service';
import { EventsService } from './services/events/events.service';
import { HomeComponent } from './pages/home/home.component';
import { HackthonHomeComponent } from './pages/hackthons/hackthon-home/hackthon-home.component';
import { CommunityComponent } from './components/community/community.component';
import { ThankyouJoincommunityComponent } from './components/thankyou-joincommunity/thankyou-joincommunity.component';
import { Hacktoberfest2019Component } from './pages/hackthons/hacktoberfest2019/hacktoberfest2019.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "join-our-community", component: CommunityComponent },
  { path: "hacktoberfest", component: Hacktoberfest2019Component },
  {
    path: 'thankyou-join-our-community',
    component: ThankyouJoincommunityComponent,
    canActivate: [JoincommunityGuard]
  },

]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ModalComponent,
    ModalSuccessComponent,
    UpcomingEventCarouselComponent,
    TestCarouselComponent,
    HomeComponent,
    HackthonHomeComponent,
    CommunityComponent,
    ThankyouJoincommunityComponent,
    Hacktoberfest2019Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    ClipboardModule,
    OwlModule
  ],
  providers: [
    AgileService,
    WebinarService,
    JoincommunityService,
    EventsService,
    HttpClient,
    Title,
    NgxSmartModalService,
    JoincommunityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
