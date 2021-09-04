import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-franchisee-dialog',
  templateUrl: './new-franchisee-dialog.component.html',
  styleUrls: ['./new-franchisee-dialog.component.css']
})
export class NewFranchiseeDialogComponent implements OnInit {

  franchiseeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }
  
  sendData() {
    let data = this.franchiseeForm.value;
    
  }
}
