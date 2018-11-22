import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiurlProvider {

  constructor(public http: HttpClient) {}
  getAPIURL(){
    return "http://a0dea55d.ngrok.io";
  }

}
