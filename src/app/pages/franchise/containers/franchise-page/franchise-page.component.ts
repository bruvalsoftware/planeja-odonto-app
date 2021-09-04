import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { NewFranchiseUserDialogComponent } from '../../components/new-franchise-user-dialog/new-franchise-user-dialog.component';
import { FranchiseUsersTableData } from '../../models/franchise-users-table-data';

@Component({
  selector: 'app-franchise-page',
  templateUrl: './franchise-page.component.html',
  styleUrls: ['./franchise-page.component.css']
})
export class FranchisePageComponent implements OnInit {

  franchiseUsersTableData$: Observable<FranchiseUsersTableData[]>

  constructor(
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
  }

  openNewFranchiseUserDialog(): void {
    const dialogRef = this.dialog.open(NewFranchiseUserDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
