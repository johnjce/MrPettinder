import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompleteThreadProvider } from '../../../providers/complete-thread/complete-thread';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
selector: 'page-complete-thread',
templateUrl: 'complete-thread.html',
})
export class CompleteThreadPage {
  id: number;
  completeThread: any[] = [];
  title:string="";
  myForm: FormGroup;

  constructor(public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams, private completeThreadProvider: CompleteThreadProvider) {
      this.id = navParams.data;
      this.myForm = this.createMyForm();
      this.getThread();
  }

  getThread() {
    return this.completeThreadProvider.getThread(this.id).subscribe(
      (data) => {
        this.completeThread = data.messages;
        this.title = data.title;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  saveData(){
    let dataOfMessage = {
      'parentThreadId' : this.id,
      'content' : this.myForm.value.content,
      };
    this.completeThreadProvider.setMessage(dataOfMessage).subscribe(
      (data) => {
        console.log("info:" + data);
      },
      (error) =>{
        console.error("error:" + error);
      });
  }

  private createMyForm(){
    return this.formBuilder.group({
      parentThreadId: [this.id],
      content: ['', Validators.required]
    });
  }

  

}

