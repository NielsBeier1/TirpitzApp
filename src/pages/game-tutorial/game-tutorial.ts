import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GamePage} from "../game/game";
import {FinishPage} from "../finish/finish";

/**
 * Generated class for the GameTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game-tutorial',
  templateUrl: 'game-tutorial.html',
})
export class GameTutorialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GameTutorialPage');
  }

  goToPageA() {
    this.navCtrl.push(GamePage, {});
  }

  goToPageB() {
    this.navCtrl.push(FinishPage, {});
  }

}
