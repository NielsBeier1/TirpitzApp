import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameTutorialPage } from './game-tutorial';

@NgModule({
  declarations: [
    GameTutorialPage,
  ],
  imports: [
    IonicPageModule.forChild(GameTutorialPage),
  ],
})
export class GameTutorialPageModule {}
