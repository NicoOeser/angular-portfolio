import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { MainpageComponent } from './mainpage/mainpage.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectElPolloLocoComponent } from './project-el-pollo-loco/project-el-pollo-loco.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';
import { ProjectPokedexComponent } from './project-pokedex/project-pokedex.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'my-skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerMenuComponent,
    HeroComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ProjectJoinComponent,
    ProjectElPolloLocoComponent,
    ProjectPortfolioComponent,
    FooterComponent,
    LegalNoticeComponent,
    ProjectPokedexComponent,
    MainpageComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }