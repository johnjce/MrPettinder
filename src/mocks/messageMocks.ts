import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable()
export class MessageMocks {
  public items: Message[] = [];
  diagnostic: any = "The animal has allergic dermatitis. Is recommended not letting him bite or scratch the affected zone. To treat this, make him eat 1 pill of Apoquel 5,4 daily.";

  constructor() {
    let items = [
      {
        "from": "user",
        "to": "vet7",
        "content": "Hello",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "user",
        "content": "Hi how are you ?",
        "time": new Date()
      },
      {
        "from": "user",
        "to": "vet7",
        "content": "Fine",
        "time": new Date()
      },
      {
        "from": "user",
        "to": "vet7",
        "content": "And you ?",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "user",
        "content": "Good",
        "time": new Date()
      },
      {
        "from": "user",
        "to": "vet8",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "vet3",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "JTS",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "vet4",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      },
      {
        "from": "vet8",
        "to": "user",
        "content": "Hi",
        "time": new Date()
      }
    ];

    for (let item of items) {
      this.items.push(item);
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Message) {
    this.items.push(item);
  }

  informSave(diagnostic){
    this.diagnostic += '<br/>' + diagnostic;
  }
  getInform(){
    return this.diagnostic;
  }
}