import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results';

enum SearchType {
  Tag = 1,
  User = 2,
  Location = 3,
  Other = 0
}


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  arrayElemt = [
    //'li-loc', 'li-tag', 'li-user',
    'ion-item-loc', 'ion-item-tag', 'ion-item-user'];

  flagUser:boolean = true;
  flagTag :boolean = false;
  flagLoc :boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  arrayElemt = ['li-loc', 'li-tag', 'li-user'];

  call(key: SearchType) {

    this.arrayElemt.forEach(element => {
      this.hideField(element);
    });

    switch (key) {

      case "tag":
          console.log('Request server by TAG NAME!');
          elem = document.getElementById('li-tag');
          elem.setAttribute('class', 'active');
          this.flagUser = true;
          this.flagTag = false;
          this.flagLoc = true;
        break;

      case "user":
          console.log('Request server by USER NAME!');
          elem = document.getElementById('li-user');
          elem.setAttribute('class', 'active');
          this.flagUser = false;
          this.flagTag = true;
          this.flagLoc = true;
        break;

      case "loc":
          console.log('Request server by LOCATION!');
          elem = document.getElementById('li-loc');
          elem.setAttribute('class', 'active');
          this.flagUser = true;
          this.flagTag = true;
          this.flagLoc = false;
        break;
      default:
        break;
    }
  }

  private showField(id: string): void {
    let el = document.getElementById(id);
    el.classList.add('active');
    el.classList.remove('hide');
  }

  private hideField(id: string): void {
    let el = document.getElementById(id);
    el.classList.remove('active');
    el.classList.add('hide');
  }

  search() {

    if (!this.flagUser) {
      this.navCtrl.push(ResultsPage,{
        p1:'User request server!'});
    } 
    else if (!this.flagTag) {
      this.navCtrl.push(ResultsPage,{
        p1:'TAG request server!'});
    } 
    else if(!this.flagLoc) {
      this.navCtrl.push(ResultsPage,{
        p1:'Location request server!'});
    } 
  }

}
