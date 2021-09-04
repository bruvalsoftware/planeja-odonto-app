import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NgApexchartsModule } from 'ng-apexcharts';

import { NewFranchiseUserDialogComponent } from './components/new-franchise-user-dialog/new-franchise-user-dialog.component';
import { FranchiseUsersTableComponent } from './components/franchise-users-table/franchise-users-table.component';
import { FranchiseService } from './services/franchise.service';
import { FranchisePageComponent } from './containers/franchise-page/franchise-page.component';

@NgModule({
    declarations: [
    FranchisePageComponent,
    NewFranchiseUserDialogComponent,
    FranchiseUsersTableComponent
  ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatCardModule,
      MatIconModule,
      MatMenuModule,
      MatButtonModule,
      MatProgressBarModule,
      MatGridListModule,
      MatSelectModule,
      MatInputModule,
      MatTableModule,
      NgApexchartsModule
      
    ],
    exports: [
    ],
    providers: [
      FranchiseService
    ],
    entryComponents: [
      NewFranchiseUserDialogComponent
    ]
  })
  export class FranchiseModule { }
  