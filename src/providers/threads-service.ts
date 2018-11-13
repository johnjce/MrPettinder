import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class ThreadsService {
  public API = 'https://379f5373.ngrok.io';
  public THREADS_API = this.API + '/threads';
  public token = 'dXNlcjpwYXNzd29yZA==';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT',
            'Accept':'application/json',
            Authorization: 'Basic ' + token
            })
    };
  constructor(public http: HttpClient) {
  }

  getGoodThreadss(): Observable<any> {
    return this.http.get(this.API + '/threads', this.httpOptions);
  }

  get(id: string) {
    return this.http.get(this.THREADS_API + '/' + id);
  }

  save(threads: any): Observable<any> {
    let result: Observable<Object>;
    if (threads) {
      result = this.http.put(this.THREADS_API,threads.threads.id, threads);
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
      result = this.http.post(this.THREADS_API,threads);
=======
      //result = this.http.post(threads);
>>>>>>> appGS1/master
=======
      //result = this.http.post(threads);
>>>>>>> appGS1/master
    }
    return result.catch(error => Observable.throw(error));
  }

  remove(id: string) {
    return this.http.delete(this.THREADS_API + '/' + id);
  }
}
