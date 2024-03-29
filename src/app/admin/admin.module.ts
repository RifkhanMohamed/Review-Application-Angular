import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './component/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Routes, RouterModule } from '@angular/router';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [
    AdminComponent
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
    MatProgressBarModule,
    MatTableModule
  ]
})
export class AdminModule { }
