import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ResultsPage } from '../results/results';
import { SettingsPage } from '../settings/settings';

export enum SearchType {
  Tag = 1,
  Location = 2,
  User = 3,
  Other = 0
}


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {

  flagUser: boolean = true;
  flagTag: boolean = false;
  flagLoc: boolean = true;
  query: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  arrayElemt = ['li-loc', 'li-tag', 'li-user'];

  call(key: SearchType) {
    this.query = '';
    this.arrayElemt.forEach(element => {
      this.hideField(element);
    });

    this.activedFlags(key);
  }

  private showField(id: string): void {
    let el = document.getElementById(id);
    el.classList.add('active');
  }
  private hideField(id: string): void {
    let el = document.getElementById(id);
    el.classList.remove('active');
  }
  private activedFlags(flag: SearchType) {
    this.flagUser = true;
    this.flagTag = true;
    this.flagLoc = true;

    switch (flag) {
      case SearchType.Location:
        this.flagLoc = false;
        this.showField('li-loc');
        break;
      case SearchType.Tag:
        this.flagTag = false;
        this.showField('li-tag');
        break;
      case SearchType.User:
        this.flagUser = false;
        this.showField('li-user');
        break;
      default:
        break;
    }
  }

  search() {
    let params = {
      query: this.query,
      queryType: null
    };

    if (!this.flagUser) {
      params.queryType = SearchType.User;
      this.navCtrl.push(ResultsPage, params);
    }
    else if (!this.flagTag) {
      params.queryType = SearchType.Tag;
      this.navCtrl.push(ResultsPage, params);
    }
    else if (!this.flagLoc) {
      params.queryType = SearchType.Location;
      this.navCtrl.push(ResultsPage, params);
    }
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
}
