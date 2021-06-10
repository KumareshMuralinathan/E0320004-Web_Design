import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApjComponent } from './apj/apj.component';
import { HomeComponent } from './home/home.component';
import { KailashComponent } from './kailash/kailash.component';
import { VisvesvarayaComponent } from './visvesvaraya/visvesvaraya.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { SourcesComponent } from './sources/sources.component';

import { AuthorizeRoutingModule } from './authorize/authorize-routing.module';
import { LoginComponent } from './authorize/components/login/login.component';
import { UserComponent } from './user/user.component';
import { SupportusComponent } from './supportus/supportus.component';


@NgModule({
  declarations: [
    AppComponent,
    ApjComponent,
    HomeComponent,
    KailashComponent,
    VisvesvarayaComponent,
    ContactusComponent,
    HeaderComponent,
    SourcesComponent,

    LoginComponent,
     UserComponent,
     SupportusComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthorizeRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
