import { Injectable, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState, selecTranslationInCommonState } from 'app/app-state.index';
import { Observable } from 'rxjs';
import { Localization } from '../model/enums';
import { setLocalization } from '../state/actions/‏‏shared-common.action';

@Injectable()
export class LocalizationService {
    OnChangeLanguage = new EventEmitter();

    constructor(private translate: TranslateService, private store: Store<AppState>) {
    }
   
    Translate(value: string, params: any = {}) {
        return this.translate.instant(value, params);
    }
    TranslateAsync(value: string, params: any = {}) {
        return this.translate.get(value, params);
    }

    changeLanguage(localization: Localization) {
        this.store.dispatch(setLocalization({ localization }));
        this.translate.use(localization);
        this.OnChangeLanguage.emit();
    }

    InitializeLanguage() {
        let language = Localization.He;
        this.translate.setDefaultLang(language);
        this.changeLanguage(language);

    }
}
