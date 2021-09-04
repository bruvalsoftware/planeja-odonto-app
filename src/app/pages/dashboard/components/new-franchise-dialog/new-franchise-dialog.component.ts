import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-franchise-dialog',
  templateUrl: './new-franchise-dialog.component.html',
  styleUrls: ['./new-franchise-dialog.component.css']
})
export class NewFranchiseDialogComponent implements OnInit {
  
  franchiseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    
  }


}
