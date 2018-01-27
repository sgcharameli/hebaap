import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(private angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  logInWithEmailAndPassword(email: string, password: string): Promise<any> {
    console.log('AuthProvider:logInWithEmailAndPassword:email:', email);
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut(): Promise<any> {
    console.log('AuthProvider:logOut');
    return this.angularFireAuth.auth.signOut();
  }

  get session() {
    return this.angularFireAuth.authState;
  }
  //TODO: create new user account

  //TODO: reset Pass

}
