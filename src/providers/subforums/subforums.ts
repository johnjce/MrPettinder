import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';

@Injectable()
export class SubforumsProvidersProvider {

  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider) {
  }
  list(): Observable< any > {
 
    return this.http.get(this.apiurlProvider.getAPIURL()+'/subforums',{ 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic dXNlcjpwYXNzd29yZA==')
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    })
    .map((res: Response) => res.json());
  }
}
