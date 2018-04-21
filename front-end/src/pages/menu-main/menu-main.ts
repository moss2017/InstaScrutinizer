import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,MenuController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-menu-main',
  templateUrl: 'menu-main.html',
})
export class MenuMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuMainPage');
  }

}
