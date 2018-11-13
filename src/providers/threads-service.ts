import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ThreadsService {
  public API = 'http://localhost:8080';
  public THREADS_API = this.API + '/threads';

  constructor(public http: HttpClient) {
  }

  getGoodThreadss(): Observable<any> {
    return this.http.get(this.API + '/threads');
  }

  get(id: string) {
    return this.http.get(this.THREADS_API + '/' + id);
  }

  save(threads: any): Observable<any> {
    let result: Observable<Object>;
    if (threads['thread_id']) {
      result = this.http.put(threads.threads['id'], threads);
    } else {
      //result = this.http.post(threads);
    }
    return result.catch(error => Observable.throw(error));
  }

  remove(id: string) {
    return this.http.delete(this.THREADS_API + '/' + id);
  }
}
