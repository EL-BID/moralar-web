import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './Public-routing.module';

// containers
import { PublicComponent } from './public.component';

@NgModule({
  declarations: [
    // containers
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
