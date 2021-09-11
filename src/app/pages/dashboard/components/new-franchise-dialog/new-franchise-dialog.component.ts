import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-franchise-dialog',
  templateUrl: './new-franchise-dialog.component.html',
  styleUrls: ['./new-franchise-dialog.component.css']
})
export class NewFranchiseDialogComponent implements OnInit {
  
  franchiseForm = new FormGroup({
    franchisee: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    
  }


}
