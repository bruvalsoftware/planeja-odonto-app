import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFranchiseUserDialogComponent } from './new-franchise-user-dialog.component';

describe('NewFranchiseUserDialogComponent', () => {
  let component: NewFranchiseUserDialogComponent;
  let fixture: ComponentFixture<NewFranchiseUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFranchiseUserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFranchiseUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
