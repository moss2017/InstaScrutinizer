import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-menu-main',
  templateUrl: 'menu-main.html',
})
export class MenuMainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuMainPage');
  }

  // private rootPage = HomePage;
  // private aboutPage = AboutPage;
  // private contactPage = ContactPage;


  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.rootPage = page;

    // close the menu when clicking a link from the menu
    //this.menu.close();
  }
}
