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
import { FranchiseeService } from 'src/app/shared/services/franchisee.service';
import { Franchisee } from 'src/app/shared/models/Franchisee';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  

  public franchiseeTableData$: Observable<Franchisee[]>;
  public franchiseTableData$: Observable<FranchiseTableData[]>;

  constructor(
    private service: DashboardService,
    private franchiseeService: FranchiseeService,
    public dialog: MatDialog,
    
    ) {
    this.franchiseeService.getFranchiseesT().subscribe( res => console.log(res));
    //this.franchiseeTableData$ = this.franchiseeService.getFranchisees();
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
