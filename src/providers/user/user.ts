import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';

@Injectable()
export class UserProvider {
  public data;
  
  error: string;
  username: any;
  
  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider) { }
  
  getLoggedUser(): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/users/'+this.username).map(res => res);
  }
  
  setUser(dataOfUser): Observable< any > {
      return this.http.post(this.apiurlProvider.getAPIURL()+'/users/', dataOfUser, { 
        headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
        .set('Content-Type', 'application/json')
        .set('cache-control', 'no-cache')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', 'true')
      }).map(res => res);
  }

  login(username, password): Observable< any > {
    this.apiurlProvider.setAutorization(btoa(username + ":" + password));
    this.username = username;
    return this.http.get(this.apiurlProvider.getAPIURL()+'/users',{ 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
  
  logout(){
    this.apiurlProvider.setAutorization("");
  }

  setUserId(id: any): any {
    throw new Error("Method not implemented.");
  }

  updateUser(dataOfUser): Observable< any > {
    return this.http.put(this.apiurlProvider.getAPIURL()+'/users/', dataOfUser, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
}
}