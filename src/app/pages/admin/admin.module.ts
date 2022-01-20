import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FeaturesModule } from 'src/app/features/features.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FeaturesModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
