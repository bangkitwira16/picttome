import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCommentsPageRoutingModule } from './view-comments-routing.module';

import { ViewCommentsPage } from './view-comments.page';
import { ErrorStateComponentModule } from 'src/app/component/error-state/error-state.module';
import { LoadingPageModule } from '../component/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCommentsPageRoutingModule,
    LoadingPageModule,
    ErrorStateComponentModule
  ],
  declarations: [ViewCommentsPage]
})
export class ViewCommentsPageModule {}
