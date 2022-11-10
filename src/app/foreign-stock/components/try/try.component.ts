import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectLoadingCommonState } from 'app/app-state.index';
import { ForeignStockRaiseEvents } from 'app/foreign-stock/state/foreign-stock.state/foreign-stock.actions';
import { ForeignStockEventListener } from 'app/foreign-stock/state/foreign-stock.state/foreign-stock.selectors';
import { LocalizationService } from 'app/shared/localization/localization.service';
import { MessageTypes } from 'app/shared/model/enums';
import { AdvMessageService } from 'app/shared/services/message.service';
import { setIsLoading } from 'app/shared/state/actions/‏‏shared-common.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  tryLabel='try label';
  constructor(private store: Store<AppState>, private messageService: AdvMessageService,
    private foreignStockEventListener: ForeignStockEventListener, private foreignStockEventRaiser: ForeignStockRaiseEvents,
    private localizationService: LocalizationService) { }

  ngOnInit(): void {
    this.messageService.successMessage('Success load PRIMENG components & styles');
    this.isLoading$ = this.store.select(selectLoadingCommonState);
    setTimeout(() => {
      this.tryLabel+=' after setTimeout';
      this.store.dispatch(setIsLoading({ isLoading: true }))
      setTimeout(() => {
        this.store.dispatch(setIsLoading({ isLoading: false }))
      }, 5000);
    }, 5000);
    this.foreignStockEventListener.selectStockNames().subscribe(stockNames => {
      this.messageService.showMessage(MessageTypes.info, this.localizationService.Translate('GENERAL.MESSAGE'), `stock names is updated in store and has ${stockNames.length} items.`)
      
    });
    setTimeout(() => {
      this.foreignStockEventRaiser.setStockNames(['stock 1', 'stock 2']);
    }, 3000);
  }

}
