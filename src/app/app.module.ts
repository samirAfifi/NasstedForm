import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageComponent } from './components/Language/language/language.component';
import { AuthenricationComponent } from './components/Authenrication/authenrication/authenrication.component';
import { BasicComponent } from './components/Authenrication/basic/basic.component';
import { LdapComponent } from './components/Authenrication/ldap/ldap.component';
import { MainFormComponent } from './components/main-form/main-form.component';
import { NavComponent } from './components/nav/nav.component';
import { CommunicateComponent } from './components/Communication/communicate/communicate.component';
import { MailComponent } from './components/Communication/mail/mail.component';
import { SmsComponent } from './components/Communication/sms/sms.component';




@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    AuthenricationComponent,
    BasicComponent,
    LdapComponent,
    MainFormComponent,
    NavComponent,
    CommunicateComponent,
    MailComponent,
    SmsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule ,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
