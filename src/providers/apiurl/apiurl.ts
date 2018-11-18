import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiurlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiurlProvider {

  constructor(public http: HttpClient) {}
  getAPIURL(){
    return "http://3d2208cc.ngrok.io";
  }

}
