import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFranchiseDialogComponent } from './new-franchise-dialog.component';

describe('NewFranchiseDialogComponent', () => {
  let component: NewFranchiseDialogComponent;
  let fixture: ComponentFixture<NewFranchiseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFranchiseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFranchiseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
