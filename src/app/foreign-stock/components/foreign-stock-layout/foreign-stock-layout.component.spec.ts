import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignStockLayoutComponent } from './foreign-stock-layout.component';

describe('ForeignStockLayoutComponent', () => {
  let component: ForeignStockLayoutComponent;
  let fixture: ComponentFixture<ForeignStockLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeignStockLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeignStockLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
