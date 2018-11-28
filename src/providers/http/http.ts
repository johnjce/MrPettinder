import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  url: string = './assets/mocks/';

  constructor(public http: HttpClient) {
  }

  get(path: string) {
    return this.http.get(this.url + path);
  }

  put(path: string, vetProfile:any){
    return this.http.post(this.url + path, vetProfile);
  }
}
