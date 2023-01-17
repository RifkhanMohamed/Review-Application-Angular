import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './component/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: ReviewComponent
  }
];

@NgModule({
  declarations: [
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    [RouterModule.forChild(routes)],
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    NgxStarRatingModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule
  ]
})
export class ReviewModule { }
