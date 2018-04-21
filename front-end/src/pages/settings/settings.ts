import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,App} from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { ResultsPage } from '../results/results';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
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
