import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';
import { UserProvider } from '../user/user';
import { from } from 'rxjs/observable/from';
@Injectable()
export class SubforumsProvidersProvider {

  constructor(private userProvider: UserProvider, public http: HttpClient, private apiurlProvider: ApiurlProvider) {
  }
  list(): Observable< any > {
 
    return this.http.get(this.apiurlProvider.getAPIURL()+'/subforums',{ 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }

  getLoggedUser(){
    this.userProvider.getLoggedUser();
  }
}
