import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GameTutorialPage} from "../game-tutorial/game-tutorial";
import {MapPage} from "../map/map";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  goToPageA() {
    this.navCtrl.push(MapPage, {});
  }

  goToPageB() {
    this.navCtrl.push(GameTutorialPage, {});
  }
}
