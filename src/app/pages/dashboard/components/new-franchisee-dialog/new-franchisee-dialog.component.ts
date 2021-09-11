import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FranchiseeService } from 'src/app/shared/services/franchisee.service';

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

  constructor( 
    private franchiseeService: FranchiseeService,
    public dialogRef: MatDialogRef<NewFranchiseeDialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  
  sendData() {
    let data = this.franchiseeForm.value;
    this.franchiseeService.createFranchisee(data).subscribe({
      next: (result: any) => {
      console.log(result);
      },
      error: (err: any) => {
      console.log(err);
      },
      complete: () => {
        this.dialogRef.close();
      }
      });
  }
}
