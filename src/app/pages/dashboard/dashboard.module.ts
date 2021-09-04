import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardPageComponent } from './containers';
import {
  VisitsChartComponent,
  PerformanceChartComponent,
  ServerChartComponent,
  RevenueChartComponent,
  DailyLineChartComponent,
  SupportRequestsComponent,
  ProjectStatChartComponent
} from './components';

import { SharedModule } from '../../shared/shared.module';
import { DashboardService } from './services';
import { MatTabsModule } from '@angular/material/tabs';
import { NewFranchiseeDialogComponent } from './components/new-franchisee-dialog/new-franchisee-dialog.component';
import { FranchiseeTableComponent } from './components/franchisee-table/franchisee-table.component';
import { FranchiseTableComponent } from './components/franchise-table/franchise-table.component';
import { NewFranchiseDialogComponent } from './components/new-franchise-dialog/new-franchise-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DashboardPageComponent,
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    ProjectStatChartComponent,
    NewFranchiseeDialogComponent,
    FranchiseeTableComponent,
    FranchiseTableComponent,
    NewFranchiseDialogComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxEchartsModule,
    TrendModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    DailyLineChartComponent
  ],
  providers: [
    DashboardService
  ],
  entryComponents: [
    NewFranchiseeDialogComponent,
    NewFranchiseDialogComponent
  ]
})
export class DashboardModule { }
