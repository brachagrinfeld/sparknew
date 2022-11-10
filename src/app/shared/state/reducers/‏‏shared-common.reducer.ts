

import { createReducer, on, Action } from '@ngrx/store';
import { DialogModel } from '../../components/dialog/dialogModel';
import { Localization } from '../../model/enums';
import { setIsLoading, setLocalization } from '../actions/‏‏shared-common.action';


export interface SharedCommonState {
    localization: Localization
    isLoading: boolean;
    dialog?: DialogModel;
}
let initialState: SharedCommonState = {
    localization:Localization.He,
    isLoading: false,
    dialog: {content:'',style:'',title:'',visible:false}
}

const createSharedCommonReducer = createReducer(
    initialState,
    on(setIsLoading, (state, { isLoading }) => {
        return {
            ...state, isLoading
        };
    }),
    on(setLocalization, (state, { localization }) => {
        return {
            ...state, localization
        };
    }),
);

export function SharedCommonReducer(state: SharedCommonState | undefined, action: Action) {
    return createSharedCommonReducer(state, action);
}

