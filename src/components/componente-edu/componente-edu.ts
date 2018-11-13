import { Component,Input } from '@angular/core';

/**
 * Generated class for the ComponenteEduComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'componente-edu',
  templateUrl: 'componente-edu.html'
})
export class ComponenteEduComponent {

  text: string;
  @Input()
  customTitle: string;

  constructor() {
    console.log('Hello ComponenteEduComponent Component');
    this.text = 'Hello World';
  }

}
