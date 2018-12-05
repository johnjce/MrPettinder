import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';
import { UserProvider } from '../user/user';

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
  getImage(): Observable< any > {
    return this.http.get('https://source.unsplash.com/random').map(res => res);
  }
  getLoggedUser(){
    this.userProvider.getLoggedUser();
  }

  getThreads(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/subforums/'+id, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
  
  setThread(body:any) : Observable< any > {
    return this.http.post(this.apiurlProvider.getAPIURL()+'/threads/', body, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }

  getThread(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/threads/'+id, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }

  setMessage(dataOfMessage): Observable< any > {
      return this.http.post(this.apiurlProvider.getAPIURL()+'/messages/', dataOfMessage, { 
        headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
        .set('Content-Type', 'application/json')
        .set('cache-control', 'no-cache')
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', 'true')
      }).map(res => res);
  }
}
