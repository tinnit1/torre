import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [HeaderComponent, ButtonComponent, AboutComponent, FeaturesComponent, PopupComponent],
  exports: [
    HeaderComponent,
    AboutComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
