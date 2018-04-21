import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { SettingsPage } from '../settings/settings';

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
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {    
  
    this.p1 = navParams.get("p1");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

    //MENU
    logoutme() {
      //this.navCtrl.push(WelcomePage);
      const root = this.app.getRootNav();
      root.popToRoot();
    }  
    SearchPage(){
      this.navCtrl.push(SearchPage);
    }
    ResultsPage(){
      this.navCtrl.push(ResultsPage);
    }
    SettingsPage(){
      this.navCtrl.push(SettingsPage);
    }
    homePage(){
      this.navCtrl.push(HomePage);
    }
  
}
