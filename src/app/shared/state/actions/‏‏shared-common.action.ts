import { ElementRef } from '@angular/core';
import { createAction, props } from '@ngrx/store'
import { Localization } from 'app/shared/model/enums'; 


export const setLocalization = createAction('[Common Service] setLocalization', props<{ localization:Localization }>());
export const setIsLoading = createAction('[Common Service] setIsLoading', props<{ isLoading: boolean }>());
export const setDivElement = createAction('[Common Service] setDivElement', props<{ divElement: any }>());