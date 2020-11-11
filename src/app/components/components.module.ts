import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';



@NgModule({
  declarations: [HeaderComponent, ButtonComponent, AboutComponent, FeaturesComponent],
  exports: [
    HeaderComponent,
    AboutComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
