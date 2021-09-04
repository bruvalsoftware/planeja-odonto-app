import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewFranchiseeDialogComponent } from '../../components/index';

import { DashboardService } from '../../services';
import {
  DailyLineChartData,
  PerformanceChartData,
  ProjectStatData,
  RevenueChartData,
  ServerChartData,
  SupportRequestData,
  VisitsChartData
} from '../../models';
import { FranchiseeTableData } from '../../models/franchisee-table-data';
import { NewFranchiseDialogComponent } from '../../components/new-franchise-dialog/new-franchise-dialog.component';
import { FranchiseTableData } from '../../models/franchise-table-data';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  
  public dailyLineChartData$: Observable<DailyLineChartData>;
  public performanceChartData$: Observable<PerformanceChartData>;
  public revenueChartData$: Observable<RevenueChartData>;
  public serverChartData$: Observable<ServerChartData>;
  public supportRequestData$: Observable<SupportRequestData[]>;
  public visitsChartData$: Observable<VisitsChartData>;
  public projectsStatsData$: Observable<ProjectStatData>;
  
  public franchiseeTableData$: Observable<FranchiseeTableData[]>;
  public franchiseTableData$: Observable<FranchiseTableData[]>;

  constructor(
    private service: DashboardService,
    public dialog: MatDialog
    ) {
    this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    this.performanceChartData$ = this.service.loadPerformanceChartData();
    this.revenueChartData$ = this.service.loadRevenueChartData();
    this.serverChartData$ = this.service.loadServerChartData();
    this.supportRequestData$ = this.service.loadSupportRequestData();
    this.visitsChartData$ = this.service.loadVisitsChartData();
    this.projectsStatsData$ = this.service.loadProjectsStatsData();
    this.franchiseeTableData$ = this.service.loadFranchiseeTableData();
    this.franchiseTableData$ = this.service.loadFranchiseTableData();

  }

  openNewFranchiseeDialog(): void {
    const dialogRef = this.dialog.open(NewFranchiseeDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openNewFranchiseDialog(): void {
    const dialogRef = this.dialog.open(NewFranchiseDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
