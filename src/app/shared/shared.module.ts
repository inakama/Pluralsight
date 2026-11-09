import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './star.component';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StartComponent
  ]
})
export class SharedModule { }
