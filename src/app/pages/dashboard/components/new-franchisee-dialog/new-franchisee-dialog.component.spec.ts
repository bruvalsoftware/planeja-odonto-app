import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFranchiseeDialogComponent } from './new-franchisee-dialog.component';

describe('NewFranchiseeDialogComponent', () => {
  let component: NewFranchiseeDialogComponent;
  let fixture: ComponentFixture<NewFranchiseeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFranchiseeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFranchiseeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
