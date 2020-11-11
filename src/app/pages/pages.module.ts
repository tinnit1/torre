import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
