import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  call(key: SearchType) {

    this.arrayElemt.forEach(element => {
      this.hideField(element);
    });

    switch (key) {
      case SearchType.Tag:
        console.log('Request server by TAG NAME!');
        this.showField('ion-item-tag');        
        break;
      case SearchType.User:
        console.log('Request server by USER NAME!');
        this.showField('ion-item-user');        
        break;
      case SearchType.Location:
        console.log('Request server by LOCATION!');
        this.showField('ion-item-loc');
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

  }

}
