import { Component, Input, OnInit } from '@angular/core';
import { FranchiseeTableData } from '../../models/franchisee-table-data';

@Component({
  selector: 'app-franchisee-table',
  templateUrl: './franchisee-table.component.html',
  styleUrls: ['./franchisee-table.component.scss']
})
export class FranchiseeTableComponent implements OnInit {
  @Input() franchiseeTableData: FranchiseeTableData[];
  constructor() { }

  ngOnInit(): void {
  }
  public displayedColumns: string[] = ['name', 'email', 'phone'];

}
