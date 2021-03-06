import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiurlProvider {
  private autorization: string="";
  constructor(public http: HttpClient) {}
  getAPIURL(){
    return "http://a3376d7e.ngrok.io";
  }
  
  getAutorization(): any {
    return this.autorization;
  }

  setAutorization(autorization){
    this.autorization = autorization;
  }
}
