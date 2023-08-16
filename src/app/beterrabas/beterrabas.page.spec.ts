import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeterrabasPage } from './beterrabas.page';

describe('BeterrabasPage', () => {
  let component: BeterrabasPage;
  let fixture: ComponentFixture<BeterrabasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BeterrabasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
