import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from '../components/components.module';
import { ProfileComponent } from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
