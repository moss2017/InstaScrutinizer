import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
//import { configs } from '../../../../configs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
@Injectable()
export class LoginPage {
  public inUser: string;
  public inPass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signin(){
    let postData = new FormData();
    postData.append('user' , this.inUser);
    postData.append('password' , this.inPass);
    
    this.http.post('http://127.0.0.1:3000/login',{postData}) 
    .subscribe(data => {
      console.log('my data: ', data);
      this.navCtrl.push(HomePage);
    })
   // this.httpClient.get('http://localhost:3000/api/insta/login');
    // alert(this.inUser);
    // alert(this.inPass);
    // this.navCtrl.push(HomePage);
  }

 
}
