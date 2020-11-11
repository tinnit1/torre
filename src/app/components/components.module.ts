import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { LinkComponent } from './link/link.component';
import {PipesModule} from '../pipes/pipes.module';



@NgModule({
  declarations: [HeaderComponent, ButtonComponent, AboutComponent, FeaturesComponent, PopupComponent, LinkComponent],
  exports: [
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
