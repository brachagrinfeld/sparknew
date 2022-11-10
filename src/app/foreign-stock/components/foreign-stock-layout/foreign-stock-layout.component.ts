import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreign-stock-layout',
  templateUrl: './foreign-stock-layout.component.html',
  styleUrls: ['./foreign-stock-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForeignStockLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
