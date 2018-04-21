import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { SearchPage } from '../search/search';
import { ResultsPage } from '../results/results';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {
 
     
  }
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
  

}
