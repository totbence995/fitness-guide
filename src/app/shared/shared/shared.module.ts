import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FittRainbowDirective } from './directives/fitt-rainbow.directive';

@NgModule({
  declarations: [FittRainbowDirective],
  imports: [CommonModule],
  exports: [FittRainbowDirective],
})
export class SharedModule {}
