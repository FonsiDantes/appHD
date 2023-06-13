import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AuthGuardModule } from '@angular/fire/auth-guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations:
    [
      AppComponent
    ],

  imports:
    [
      BrowserModule,
      IonicModule.forRoot({ mode: 'md'}),
      AppRoutingModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      AuthGuardModule,
      HttpClientModule
    ],

  providers:
    [
      EmailComposer,
      {
        provide: RouteReuseStrategy,
        useClass: IonicRouteStrategy
      }],
  bootstrap:
    [
      AppComponent
    ],
})
export class AppModule { }
