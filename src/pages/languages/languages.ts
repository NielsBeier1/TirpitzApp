import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StartPage} from "../start/start";

/**
 * Generated class for the LanguagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-languages',
  templateUrl: 'languages.html',
})
export class LanguagesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagesPage');
  }

  goToPage() {
    this.navCtrl.push(StartPage, {});
  }

}
