import { Component, Input, OnInit } from '@angular/core';
import { FranchiseTableData } from '../../models/franchise-table-data';

@Component({
  selector: 'app-franchise-table',
  templateUrl: './franchise-table.component.html',
  styleUrls: ['./franchise-table.component.scss']
})
export class FranchiseTableComponent implements OnInit {
  @Input() franchiseTableData: FranchiseTableData[];

  constructor() { }

  ngOnInit(): void {
  }
  public displayedColumns: string[] = ['name', 'email', 'phone'];

}
