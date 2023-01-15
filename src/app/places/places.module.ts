import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesComponent } from './component/places.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatCardModule,
    MatButtonModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlacesModule { }
