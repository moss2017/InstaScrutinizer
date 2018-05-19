import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
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
  public searchTag: string;
  public searchUser: string;
  public SearchLocation: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App,public http: HttpClient) {
  }

  arrayElemt = ['li-loc', 'li-tag', 'li-user'];

  call(key: SearchType) {
    this.searchTag = '';
    this.searchUser = '';
    this.SearchLocation = '';
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
      searchTag: this.searchTag,
      searchUser: this.searchUser,
      SearchLocation: this.SearchLocation,
      //query: this.query,
      queryType: null
    };

    if (!this.flagUser) {
      params.queryType = SearchType.User;
      alert(this.searchUser);
      let data = '{"userKey":"'+this.searchUser+'"}';
      this.http.post('http://127.0.0.1:3000/searchUser',{data}) 
      .subscribe(
        res => {
          console.log('my data: ', res);
          this.navCtrl.push(SearchPage);
      },
      err => {
        console.log("Error occured");    
        this.navCtrl.push(SearchPage);
        //this.navCtrl.push(ResultsPage, params); 
      }
    );
     
    }
    else if (!this.flagTag) {
      params.queryType = SearchType.Tag;
      console.log(this.searchTag);
      this.navCtrl.push(ResultsPage, params);
    }
    else if (!this.flagLoc) {
      params.queryType = SearchType.Location;
      console.log(this.SearchLocation);
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
