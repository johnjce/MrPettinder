import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThreadsPage } from './threads';
import { ThreadsService } from '../../providers/threads-service';
import { ThreadsModalPage } from './threads-modal';
import {ComponenteEduComponent} from '../../components/componente-edu/componente-edu'
@NgModule({
  declarations: [
    ThreadsPage,
    ThreadsModalPage,
    ComponenteEduComponent,
  ],
  imports: [
    IonicPageModule.forChild(ThreadsPage),
  ],
  providers: [
    ThreadsService
  ],
  entryComponents: [
    ThreadsModalPage,
    ComponenteEduComponent,

  ]
})
export class ThreadsPageModule {}
