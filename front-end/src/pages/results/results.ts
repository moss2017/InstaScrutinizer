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
  public p1;
  public resultList;
  public query: String;
  public queryType: SearchType;
  private loader; 


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public loadingCtrl: LoadingController,
    public http: HttpClient) {
      this.query = navParams.get("query");
      this.queryType = navParams.get("queryType");
      this.executeSearch();
      this.presentLoading();
  }

  
  loadResultListFromResponse(list: any): any {
    console.log(list);
    let count = 1;
    this.resultList = [];
    list.users.forEach(el => {
      this.resultList.push({ name: el.name, position: count }, );
      count++;
    });
    this.loader.dismissAll();
  }
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
    let resp : any = null;

    const params = new HttpParams()
    .set('searchText', `${this.query}`)
    .set('searchText', `${this.queryType}`)
    this.http.get(apiUrl, {params}).subscribe(res => this.loadResultListFromResponse(res));

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ResultsPage');
  }

  //MENU
  logoutme() {
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
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
    });
    this.loader.present();

    // // TODO: aftes receive result of search remove loader
    // setTimeout(this.loadResultList(),3500);
  }
  loadResultList() {
    this.resultList = [
      { name: "Alessandro", position:1 },
      { name: "Luis", position:2 },
      { name: "Rui", position:3 },
    ]
  }

}
