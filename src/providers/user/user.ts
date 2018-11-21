import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';


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
    var credenials = JSON.stringify({
        "username": username,
        "password": password
    });
    return new Promise((resolve,reject) => {
      this.http.post(this.apiurlProvider.getAPIURL() + '/login', { 
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('cache-control', 'no-cache')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', 'true'),
        form : {
          "username": username,
          "password": password
        }
      })
      .map((res: Response) => res.json())
        .subscribe(data => {
            this.data = data;
            resolve(this.data);
          }, err => {
            reject(err);
        });
    });
  }
}