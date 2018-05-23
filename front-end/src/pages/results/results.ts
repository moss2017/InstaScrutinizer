import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage, SearchType } from '../search/search';
import { SettingsPage } from '../settings/settings';
import { LoadingController } from 'ionic-angular';
import { HttpClient,HttpParams } from '@angular/common/http';
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

  getApiURL = function(qType : SearchType) : string {
    let APIurl:string = "http://127.0.0.1:3000/";
    switch (qType) {
      case SearchType.Location:
      APIurl += "l";
        break;
      case SearchType.User:
      APIurl += "searchUser";
        break;
      case SearchType.Tag:
      APIurl += "";      
        break;
      default:
        break;
    }
    return APIurl;
  }

  executeSearch(): any {

    let apiUrl: string = this.getApiURL(this.queryType);

    const params = new HttpParams()
    .set('searchText', `${this.query}`)
    this.http.get(apiUrl, {params}).subscribe(res => console.log(res));



    // let data = '{"userKey":"'+this.searchUser+'"}';
    // this.http.post('http://127.0.0.1:3000/searchUser',{data}) 
    // .subscribe(
    //   res => {
    //     console.log('my data: ', res);
    //     this.navCtrl.push(SearchPage);
    // },
    // err => {
    //   console.log("Error occured");    
    //   this.navCtrl.push(SearchPage);
    //   //this.navCtrl.push(ResultsPage, params); 
    // }
  // );
  }
  public p1;
  public resultList;
  public query: String;
  public queryType: SearchType;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public app: App, 
    public loadingCtrl: LoadingController,
    public http: HttpClient) {

    this.query = navParams.get("query");
    this.queryType = navParams.get("queryType");
    // console.log(this.query,this.queryType);

    this.executeSearch();

    this.presentLoading();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ResultsPage');
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
