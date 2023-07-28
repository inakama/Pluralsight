import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './star.components';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StartComponent
  ]
})
export class SharedModule { }
