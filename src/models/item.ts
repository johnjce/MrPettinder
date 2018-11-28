export class Item {

  constructor(fields: any) {
    for (const f in fields) {
      this[f] = fields[f];
    }
  }

}
