import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  arrayElemt = ['li-loc', 'li-tag', 'li-user'];


  call(key) {

    var elem = null;
    this.arrayElemt.forEach(element => {
      document.getElementById(element).setAttribute('class', '');
    });

    switch (key) {

      case "tag":
        console.log('Request server by TAG NAME!');
        elem = document.getElementById('li-tag');
        elem.setAttribute('class', 'active');
        //document.getElementById('box-Search').innerHTML = tagHtml;

        break;

      case "user":
        console.log('Request server by USER NAME!');
        elem = document.getElementById('li-user');
        elem.setAttribute('class', 'active');
        break;

      case "loc":
        console.log('Request server by LOCATION!');
        elem = document.getElementById('li-loc');
        elem.setAttribute('class', 'active');
        break;

      default:
        break;
    }
  }

  search() {

  }

}
