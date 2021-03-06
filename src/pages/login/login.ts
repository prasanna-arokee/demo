import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }
  loginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      console.log(res);
    })
  }
  logoutWithFacebook() {
    this.fire.auth.signOut();
   }
  Homepage() {
    this.navCtrl.push(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
