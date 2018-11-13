import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreadsPage } from './threads';
import { ThreadsService } from '../../providers/threads-service';
import { ThreadsModalPage } from './threads-modal';

@NgModule({
  declarations: [
    ThreadsPage,
    ThreadsModalPage
  ],
  imports: [
    IonicPageModule.forChild(ThreadsPage),
  ],
  providers: [
    ThreadsService
  ],
  entryComponents: [
    ThreadsModalPage
  ]
})
export class ThreadsPageModule {}
