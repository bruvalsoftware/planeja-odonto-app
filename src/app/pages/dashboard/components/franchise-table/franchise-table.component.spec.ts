import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseTableComponent } from './franchise-table.component';

describe('FranchiseTableComponent', () => {
  let component: FranchiseTableComponent;
  let fixture: ComponentFixture<FranchiseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
