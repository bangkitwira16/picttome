import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDetailPageRoutingModule } from './user-detail-routing.module';

import { UserDetailPage } from './user-detail.page';
import { ErrorStateComponentModule } from 'src/app/component/error-state/error-state.module';
import { LoadingPageModule } from '../component/loading/loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDetailPageRoutingModule,
    LoadingPageModule,
    ErrorStateComponentModule
  ],
  declarations: [UserDetailPage]
})
export class UserDetailPageModule {}
