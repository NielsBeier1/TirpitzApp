import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {StartPage} from "../pages/start/start";
import {GamePage} from "../pages/game/game";
import {GuidePage} from "../pages/guide/guide";
import {MapPage} from "../pages/map/map";
import {WarningPage} from "../pages/warning/warning";
import {LanguagesPage} from "../pages/languages/languages";
import {InstructionsPage} from "../pages/instructions/instructions";
import {GameTutorialPage} from "../pages/game-tutorial/game-tutorial";
import {FinishPage} from "../pages/finish/finish";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartPage,
    GamePage,
    GuidePage,
    MapPage,
    WarningPage,
    LanguagesPage,
    InstructionsPage,
    GamePage,
    GameTutorialPage,
    FinishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartPage,
    GamePage,
    GuidePage,
    MapPage,
    WarningPage,
    LanguagesPage,
    InstructionsPage,
    GamePage,
    GameTutorialPage,
    FinishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
