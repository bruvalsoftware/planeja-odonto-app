import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseeTableComponent } from './franchisee-table.component';

describe('FranchiseeTableComponent', () => {
  let component: FranchiseeTableComponent;
  let fixture: ComponentFixture<FranchiseeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
