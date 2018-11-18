import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';


@Injectable()
export class UserProvider {

  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider) {
  }
  getUser(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/users/'+id);
  }
}
