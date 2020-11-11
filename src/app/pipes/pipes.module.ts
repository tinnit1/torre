import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconPipe} from './icon.pipe';



@NgModule({
  declarations: [IconPipe],
  exports: [
    IconPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
