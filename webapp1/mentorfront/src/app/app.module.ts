import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SignupComponent } from './signup/signup.component';
import { SkillsComponent } from './skills/skills.component';
import { MentorComponent } from './mentor/mentor.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddskillComponent } from './addskill/addskill.component';
import { MentorhomeComponent } from './mentorhome/mentorhome.component';

const appRoutes: Routes = [ 
  { path: '', redirectTo: 'main-page', pathMatch:'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'login',component: LoginComponent},
  { path: 'main-page',component: MainpageComponent},
  {path:'addMentorDetails',component:MentorComponent},
  {path:'SkillAdd',component:SkillsComponent},
  {path:'mentor',component:MentorhomeComponent},
  {path:'mentorskills',component:AddskillComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    SignupComponent,
    SkillsComponent,
    MentorComponent,
    LoginComponent,
    AddskillComponent,
    MentorhomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
