import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseUsersTableComponent } from './franchise-users-table.component';

describe('FranchiseUsersTableComponent', () => {
  let component: FranchiseUsersTableComponent;
  let fixture: ComponentFixture<FranchiseUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseUsersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
