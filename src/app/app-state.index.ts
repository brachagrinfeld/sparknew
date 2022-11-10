import { CommonState, commonReducer, selectAuthData, selectIsLoading, selectDialog, selectTranslation, selectRole } from "./shared/state/state.index";
import { createSelector } from "@ngrx/store";

const reducers = {
    common: commonReducer,
};

interface AppState {
    common: CommonState
}

export { reducers, AppState };

export const selectCommon = (state:AppState) => state.common;
export const selectAuthDataCommonState = createSelector(selectCommon, selectAuthData)
export const selectRoleInCommonState = createSelector(selectCommon, selectRole)


export const selecTranslationInCommonState = createSelector(selectCommon, selectTranslation)
export const selectLoadingCommonState = createSelector(selectCommon, selectIsLoading)
export const selectDialogCommonState = createSelector(selectCommon, selectDialog)





