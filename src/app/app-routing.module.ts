import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: MySkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'navigation', component: BurgerMenuComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
