import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OurGoalComponent } from './home-page/our-goal/our-goal.component';
import { PowerComponent } from './home-page/power/power.component';
import { InvincibilityComponent } from './home-page/invincibility/invincibility.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NeedsComponent } from './home-page/needs/needs.component';
import { CarouselComponent } from './home-page/needs/carousel/carousel.component';
import { LastNewsComponent } from './home-page/last-news/last-news.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbdModalStacked } from './header/modal-stacked.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project', component: ProjectPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    OurGoalComponent,
    PowerComponent,
    InvincibilityComponent,
    NeedsComponent,
    CarouselComponent,
    LastNewsComponent,
    FooterComponent,
    ProjectPageComponent,
    NgbdModalStacked,
  ],
  exports: [CarouselComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
