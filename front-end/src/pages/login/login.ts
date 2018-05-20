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
        let jsonObj:ObjAutentication = JSON.parse(OBJ);
        console.log(jsonObj.isOk);
        let flag : boolean = jsonObj.isOk;
        console.log(flag);
        if (flag === false) {
          this.navCtrl.push(LoginPage);
        }else{
          this.navCtrl.push(HomePage);
        }
      //console.log('my data: ', res);
      },
      err => {
        console.log("Error occured");
        this.navCtrl.push(LoginPage);
      }
    );
    
   // this.httpClient.get('http://localhost:3000/api/insta/login');
    // alert(this.inUser);
    // alert(this.inPass);
    // this.navCtrl.push(HomePage);
  }

 
}
interface ObjAutentication {
  isOk: boolean;
  idUser: number;
}
