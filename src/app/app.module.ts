import { PrivacyPageModule } from './../pages/privacy/privacy.module';
import { TermsPage } from './../pages/terms/terms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from './../pages/login/login';
import { SplashPage } from './../pages/splash/splash';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPageModule } from '../pages/login/login.module';
import { SplashPageModule } from '../pages/splash/splash.module';
import { TermsPageModule } from '../pages/terms/terms.module';
import { PrivacyPage } from '../pages/privacy/privacy';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';


 var config = {
    apiKey: "AIzaSyCffOuw5PgSa3AFLxt4LY3JtaLS8nZr6mQ",
    authDomain: "fire-event.firebaseapp.com",
    databaseURL: "https://fire-event.firebaseio.com",
    projectId: "fire-event",
    storageBucket: "fire-event.appspot.com",
    messagingSenderId: "623737690943"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // LoginPage,
    // SplashPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    SplashPageModule,
    TermsPageModule,
    PrivacyPageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SplashPage,
    TermsPage,
    PrivacyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
