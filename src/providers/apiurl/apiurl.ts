import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiurlProvider {
  private autorization: string="";
  constructor(public http: HttpClient) {}
  getAPIURL(){
    return "http://9c0dd51c.ngrok.io";
  }
  
  getAutorization(): any {
    return this.autorization;
  }

  setAutorization(autorization){
    this.autorization = autorization;
  }
}
