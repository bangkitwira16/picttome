import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorStateComponent } from './error-state.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ErrorStateComponent],
  exports: [ErrorStateComponent]
})
export class ErrorStateComponentModule {}
