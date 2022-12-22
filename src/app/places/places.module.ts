import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './component/places.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: PlacesComponent
  }
];

@NgModule({
  declarations: [
    PlacesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    MatCardModule
  ]
})
export class PlacesModule { }
