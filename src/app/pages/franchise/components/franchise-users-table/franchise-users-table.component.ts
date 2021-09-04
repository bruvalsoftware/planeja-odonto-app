import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchise-users-table',
  templateUrl: './franchise-users-table.component.html',
  styleUrls: ['./franchise-users-table.component.scss']
})
export class FranchiseUsersTableComponent implements OnInit {
  //@Input() franchiseTableData: FranchiseTableData[];
  @Input() franchiseUsersTableData;

  constructor() { }

  ngOnInit(): void {
  }
  public displayedColumns: string[] = ['name', 'email', 'phone'];

}
