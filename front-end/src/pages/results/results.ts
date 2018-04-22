import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage, SearchType } from '../search/search';
import { SettingsPage } from '../settings/settings';
import { LoadingController } from 'ionic-angular';

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

  public p1;
  public resultList;
  public query: String;
  public queryType: SearchType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public loadingCtrl: LoadingController) {
    this.query = navParams.get("query");
    this.queryType = navParams.get("queryType");

    this.presentLoading();
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
  SearchPage() {
    this.navCtrl.push(SearchPage);
  }
  ResultsPage() {
    this.navCtrl.push(ResultsPage);
  }
  SettingsPage() {
    this.navCtrl.push(SettingsPage);
  }
  homePage() {
    this.navCtrl.push(HomePage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
    });
    loader.present();

    // TODO: aftes receive result of search remove loader
    setTimeout(this.loadResultList(),3500);
  }
  loadResultList() {
    this.resultList = [
      { name: "Alessandro", position:1 },
      { name: "Luis", position:2 },
      { name: "Rui", position:3 },
    ]
  }

}
