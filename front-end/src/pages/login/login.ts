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
    
    let jsonString = '{"name":"'+this.inUser+'","pwd":"'+this.inPass+'"}'
    let jsonObject = JSON.parse(jsonString);

    this.http.post('http://127.0.0.1:3000/login',{jsonObject}) 
    .subscribe(
      res => {
        var OBJ = JSON.stringify(res);
        let jsonObj = JSON.parse(OBJ);
        
        var flag : String = jsonObj.isOk;
        console.log(flag);
        if (flag === 'true') {
          this.navCtrl.push(HomePage);
        }else{
          this.navCtrl.push(LoginPage);
        }
      //console.log('my data: ', res);
      },
      err => {
        console.log("Error occured");
        this.navCtrl.push(LoginPage);
      }
    );
 
  }

 
}

