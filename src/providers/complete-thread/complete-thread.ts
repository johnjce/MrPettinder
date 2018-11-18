import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';

@Injectable()
export class CompleteThreadProvider {

  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider ) {
  }
  getThread(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/threads/'+id);
  }
}

