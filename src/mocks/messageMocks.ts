import { Injectable } from '@angular/core';
import { Message } from '../models/message';

@Injectable()
export class MessageMocks {
  public items: Message[] = [];
  diagnostic: any = "The animal has allergic dermatitis. Is recommended not letting him bite or scratch the affected zone. To treat this, make him eat 1 pill of Apoquel 5,4 daily.";

  constructor() {
    let items = [
      {
        "from": "Usuario1",
        "to": "vet6",
        "content": "Hi,Dr. I wanted to ask you if I can bathe my guinea pig in winter or is it very riscky?",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario1",
        "content": "Hello, of course you can bathe it, but you have to know that if you don't dry it wel between the hairs and fingers it can hurt the skin",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet6",
        "content": "Oh thank you very much. I will keep it very much in mind.",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario1",
        "content": "You are wellcome, any doubt you have, I will help you.",
        "time": new Date()
      },

      {
        "from": "Usuario2",
        "to": "vet6",
        "content": "Hello doctor. My kitten is pregnant for a few months and it's the first time, What are the care Ishould give her?",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario2",
        "content": "Hello. First analysis to see if everything goes well. Give her a good diet. By vitamins if necessary. Letti her do her normal life. Be very careful not to tighten her belly especially if there are children at home. And give her a lot of love.",
        "time": new Date()
      },
      {
        "from": "Usuario2",
        "to": "vet6",
        "content": "Thanks Dr., it's very helpful.",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario2",
        "content": "You are wellcome. Good luck",
        "time": new Date()
      },

      {
        "from": "Usuario3",
        "to": "vet6",
        "content": "Hello Dr. I wanted to tell you thet my dog has a lot of fleas, what do you recommend?",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario3",
        "content": "Hello, I recommend, Johnsons 4 fleas protector for dogs and 3 months of protection. It's very effective, you can buy it in our online shop.",
        "time": new Date()
      },
      {
        "from": "Usuario3",
        "to": "vet6",
        "content": "Thanks Dr., Ibuy it today.",
        "time": new Date()
      },
      {
        "from": "vet6",
        "to": "Usuario3",
        "content": "You are wellcome.",
        "time": new Date()
      },


      {
        "from": "Usuario1",
        "to": "vet5",
        "content": "Hi,Dr. I wanted to ask you if I can bathe my guinea pig in winter or is it very riscky?",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario1",
        "content": "Hello, of course you can bathe it, but you have to know that if you don't dry it wel between the hairs and fingers it can hurt the skin",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet5",
        "content": "Oh thank you very much. I will keep it very much in mind.",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario1",
        "content": "You are wellcome, any doubt you have, I will help you.",
        "time": new Date()
      },

      {
        "from": "Usuario2",
        "to": "vet5",
        "content": "Hello doctor. My kitten is pregnant for a few months and it's the first time, What are the care Ishould give her?",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario2",
        "content": "Hello. First analysis to see if everything goes well. Give her a good diet. By vitamins if necessary. Letti her do her normal life. Be very careful not to tighten her belly especially if there are children at home. And give her a lot of love.",
        "time": new Date()
      },
      {
        "from": "Usuario2",
        "to": "vet5",
        "content": "Thanks Dr., it's very helpful.",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario2",
        "content": "You are wellcome. Good luck",
        "time": new Date()
      },

      {
        "from": "Usuario3",
        "to": "vet5",
        "content": "Hello Dr. I wanted to tell you thet my dog has a lot of fleas, what do you recommend?",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario3",
        "content": "Hello, I recommend, Johnsons 4 fleas protector for dogs and 3 months of protection. It's very effective, you can buy it in our online shop.",
        "time": new Date()
      },
      {
        "from": "Usuario3",
        "to": "vet5",
        "content": "Thanks Dr., Ibuy it today.",
        "time": new Date()
      },
      {
        "from": "vet5",
        "to": "Usuario3",
        "content": "You are wellcome.",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet4",
        "content": "Hi,Dr. I wanted to ask you if I can bathe my guinea pig in winter or is it very riscky?",
        "time": new Date()
      },
      {
        "from": "vet4",
        "to": "Usuario1",
        "content": "Hello, of course you can bathe it, but you have to know that if you don't dry it wel between the hairs and fingers it can hurt the skin",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet4",
        "content": "Oh thank you very much. I will keep it very much in mind.",
        "time": new Date()
      },
      {
        "from": "vet4",
        "to": "Usuario1",
        "content": "You are wellcome, any doubt you have, I will help you.",
        "time": new Date()
      },

      {
        "from": "Usuario2",
        "to": "vet4",
        "content": "Hello doctor. My kitten is pregnant for a few months and it's the first time, What are the care Ishould give her?",
        "time": new Date()
      },
      {
        "from": "vet4",
        "to": "Usuario2",
        "content": "Hello. First analysis to see if everything goes well. Give her a good diet. By vitamins if necessary. Letti her do her normal life. Be very careful not to tighten her belly especially if there are children at home. And give her a lot of love.",
        "time": new Date()
      },
      {
        "from": "Usuario2",
        "to": "vet4",
        "content": "Thanks Dr., it's very helpful.",
        "time": new Date()
      },
      {
        "from": "vet4",
        "to": "Usuario2",
        "content": "You are wellcome. Good luck",
        "time": new Date()
      },

      {
        "from": "Usuario3",
        "to": "vet7",
        "content": "Hello Dr. I wanted to tell you thet my dog has a lot of fleas, what do you recommend?",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "Usuario3",
        "content": "Hello, I recommend, Johnsons 4 fleas protector for dogs and 3 months of protection. It's very effective, you can buy it in our online shop.",
        "time": new Date()
      },
      {
        "from": "Usuario3",
        "to": "vet7",
        "content": "Thanks Dr., Ibuy it today.",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "Usuario3",
        "content": "You are wellcome.",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet7",
        "content": "Hi,Dr. I wanted to ask you if I can bathe my guinea pig in winter or is it very riscky?",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "Usuario1",
        "content": "Hello, of course you can bathe it, but you have to know that if you don't dry it wel between the hairs and fingers it can hurt the skin",
        "time": new Date()
      },
      {
        "from": "Usuario1",
        "to": "vet7",
        "content": "Oh thank you very much. I will keep it very much in mind.",
        "time": new Date()
      },
      {
        "from": "vet7",
        "to": "Usuario1",
        "content": "You are wellcome, any doubt you have, I will help you.",
        "time": new Date()
      },

      {
        "from": "Usuario2",
        "to": "vet3",
        "content": "Hello doctor. My kitten is pregnant for a few months and it's the first time, What are the care Ishould give her?",
        "time": new Date()
      },
      {
        "from": "vet3",
        "to": "Usuario2",
        "content": "Hello. First analysis to see if everything goes well. Give her a good diet. By vitamins if necessary. Letti her do her normal life. Be very careful not to tighten her belly especially if there are children at home. And give her a lot of love.",
        "time": new Date()
      },
      {
        "from": "Usuario2",
        "to": "vet3",
        "content": "Thanks Dr., it's very helpful.",
        "time": new Date()
      },
      {
        "from": "vet3",
        "to": "Usuario2",
        "content": "You are wellcome. Good luck",
        "time": new Date()
      },

      {
        "from": "Usuario3",
        "to": "vet3",
        "content": "Hello Dr. I wanted to tell you thet my dog has a lot of fleas, what do you recommend?",
        "time": new Date()
      },
      {
        "from": "vet3",
        "to": "Usuario3",
        "content": "Hello, I recommend, Johnsons 4 fleas protector for dogs and 3 months of protection. It's very effective, you can buy it in our online shop.",
        "time": new Date()
      },
      {
        "from": "Usuario3",
        "to": "vet3",
        "content": "Thanks Dr., Ibuy it today.",
        "time": new Date()
      },
      {
        "from": "vet3",
        "to": "Usuario3",
        "content": "You are wellcome.",
        "time": new Date()
      },
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

  informSave(diagnostic) {
    this.diagnostic += '<br/><br/>' + diagnostic;
  }
  getInform() {
    return this.diagnostic;
  }
}