import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostGalleryPageRoutingModule } from './post-gallery-routing.module';

import { PostGalleryPage } from './post-gallery.page';
import { LoadingPageModule } from '../component/loading/loading.module';
import { ErrorStateComponentModule } from 'src/app/component/error-state/error-state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostGalleryPageRoutingModule,
    LoadingPageModule,
    ErrorStateComponentModule
  ],
  declarations: [PostGalleryPage]
})
export class PostGalleryPageModule {}
