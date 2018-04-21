import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  public p1 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.p1 = navParams.get("p1");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  
}
