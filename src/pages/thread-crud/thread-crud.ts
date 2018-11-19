import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThreadsProvider } from '../../providers/threads/threads';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-thread-crud',
  templateUrl: 'thread-crud.html',
})
export class ThreadCrudPage {

  id: number;
  title:string="";
  myForm: FormGroup;
  data:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private threadsProvider: ThreadsProvider,
              public formBuilder: FormBuilder ){
    this.id = navParams.data;
    this.myForm = this.createMyForm();
    this.getAllThreads();
  }

  getAllThreads() {
    return this.threadsProvider.getThreads(this.id).subscribe(
      (data) => {
        this.title = data.title;
      },
      (error) =>{
        console.error(error);
      }
    );
  }
  saveData(){
    this.threadsProvider.setThread(this.myForm.value);
  }
  private createMyForm(){
    return this.formBuilder.group({
      title: ['', Validators.required],
      parentSubforumId: [this.id, Validators.required],
      description: ['', Validators.required],
      messages: [],
    });
  }
}
