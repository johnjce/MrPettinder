import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';

@Injectable()
export class ThreadsProvider {

  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider) {
  }
  getThreads(id:number): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/subforums/'+id);
  }
  setThread(body:any): Observable< void > {
    this.http.post(this.apiurlProvider.getAPIURL()+'/threads/', body)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}
