import { Component, ViewEncapsulation, ChangeDetectionStrategy, HostListener, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from 'app/shared/localization/localization.service';
import { AppState, selectLoadingCommonState } from './app-state.index';
import { AppAuthService } from './shared/services/app-auth.service';
import { AdvMessageService } from './shared/services/message.service';
import { setIsLoading } from './shared/state/actions/‏‏shared-common.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppComponent {
  constructor(private store: Store<AppState>, private localizationService: LocalizationService, private translateService: TranslateService,
    private messagesService: AdvMessageService, private titleService: Title, private changeRef:ChangeDetectorRef) {
    localizationService.InitializeLanguage();
  }
  @ViewChild('blockUIElement') blockUIElement: ElementRef;

  isLoading$: any;
  divElement: any;

  ngOnInit() {
    this.store.dispatch(setIsLoading({ isLoading: true }))
    this.isLoading$ = this.store.select(selectLoadingCommonState);
    this.messagesService.onAddMessage.subscribe(() => {
      this.changeRef.detectChanges();
    });
  }
}
