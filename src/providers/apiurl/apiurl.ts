import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiurlProvider {

  constructor(public http: HttpClient) {}
  getAPIURL(){
    return "http://0876f473.ngrok.io";
  }

}
