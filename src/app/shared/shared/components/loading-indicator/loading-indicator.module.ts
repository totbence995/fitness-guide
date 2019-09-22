import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoadingIndicatorService } from './loading-indicator.service';

@NgModule({
  declarations: [LoadingIndicatorComponent],
  imports: [CommonModule],
  exports: [LoadingIndicatorComponent],
})
export class LoadingIndicatorModule {
  constructor() {
    console.log('loadingIndicatorMOdule');
  }
}
