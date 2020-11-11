import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostDetailPageRoutingModule } from './post-detail-routing.module';

import { PostDetailPage } from './post-detail.page';
import { LoadingPageModule } from '../../component/loading/loading.module';
import { ErrorStateComponentModule } from 'src/app/component/error-state/error-state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostDetailPageRoutingModule,
    LoadingPageModule,
    ErrorStateComponentModule
  ],
  declarations: [PostDetailPage]
})
export class PostDetailPageModule {}
