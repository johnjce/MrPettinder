import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubforumsProvidersProvider } from '../../../providers/subforums/subforums';

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
  likes:number=0;
  
  description:string="";

  constructor(public formBuilder:FormBuilder,public navCtrl: NavController, public navParams: NavParams, private completeThreadProvider: SubforumsProvidersProvider) {
      this.id = navParams.data;
      this.myForm = this.createMyForm();
      this.getThread();
  }

  getThread() {
    return this.completeThreadProvider.getThread(this.id).subscribe(
      (data) => {
        this.completeThread = data.messages;
        this.title = data.title;
        this.description = data.description;
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
        this.navCtrl.setRoot(CompleteThreadPage, this.id);
      },
      (error) =>{
        console.error("error:" + error);
      });
  }

  private createMyForm(){
    return this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  private like(){
    this.likes += 1;
  }

  

}

