import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafezesPage } from './cafezes.page';

describe('CafezesPage', () => {
  let component: CafezesPage;
  let fixture: ComponentFixture<CafezesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CafezesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
