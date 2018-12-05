import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import { ApiurlProvider } from '../apiurl/apiurl';
import {User} from "../../models/user";

@Injectable()
export class UserProvider {
  public data;
  private _user:User = new User();
  error: string;
  username: any;
  timeAvailable:any = 100;
  
  constructor(public http: HttpClient, private apiurlProvider: ApiurlProvider) { }
  
  getTimeAvailable(): any {
    return this.timeAvailable;
  }
  
  setTimeAvailable(time): any {
    this.timeAvailable = time;
  }
  
  getLoggedUser(): Observable< any > {
    let ruta = '/users/';
    if(this.username.substr(0,3) == "vet"){
      ruta = '/vets/name/';
    }
    return this.http.get(this.apiurlProvider.getAPIURL()+ruta+this.username).map(res => res);
  }
  
  getVeterinarians(): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/vets').map(res => res);
  }
  
  
  login(username, password, ruta): Observable< any > {
    this.apiurlProvider.setAutorization(btoa(username + ":" + password));
    this.username = username;
    return this.http.get(this.apiurlProvider.getAPIURL()+ruta+username,{ 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
  
  logout(){
    this.apiurlProvider.setAutorization("");
  }
  
  updateUser(dataOfUser): Observable< any > {
    return this.http.put(this.apiurlProvider.getAPIURL()+'/users/', dataOfUser, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
  
  setUser(dataOfUser): Observable< any > {
    return this.http.post(this.apiurlProvider.getAPIURL()+'/users/', dataOfUser, { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
  
  get user():User {
    return this._user;
  }
  
  set user(value:User) {
    this._user = value;
  }

  getUsers(): Observable< any > {
    return this.http.get(this.apiurlProvider.getAPIURL()+'/users', { 
      headers: new HttpHeaders()
      .set('Authorization', 'Basic ' + this.apiurlProvider.getAutorization())
      .set('Content-Type', 'application/json')
      .set('cache-control', 'no-cache')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', 'true')
    }).map(res => res);
  }
}