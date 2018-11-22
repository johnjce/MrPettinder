import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';
import { Header } from 'ionic-angular';


@Injectable()
export class UserProvider {
  
  public data;
  
  error: string;
  
  constructor(public http: HttpClient, 
              private apiurlProvider: ApiurlProvider) {

  }

  getUser(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/users/'+id);
  }
  
  isTokenSaved() {
  }
  
  cleanTheToken() {
  }
  
  login(username, password) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    console.log('username ' + username + ' password ' + password);
    /*return new Promise((resolve,reject) => {
      this.http.post(this.apiurlProvider.getAPIURL() + '/login', {
        "username": username,
        "password": password
      },{ 
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', 'true')
      }).timeout(2500)
        .subscribe(data => {
            this.data = data;
            this.apiurlProvider.setAutorization(btoa(username + ":" + password));
            resolve(this.data);
          }, err => {
            reject(err);
        });
    });*/
  }
}