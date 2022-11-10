import { ActionReducer, combineReducers } from "@ngrx/store";
import { AuthData } from "../model/auth-data.model";
import { userReducer, AuthUserState } from "./reducers/auth-user.reducer";
import { DialogModel } from "../components/dialog/dialogModel";
import { SharedCommonReducer, SharedCommonState } from "./reducers/‏‏shared-common.reducer";


const reducers = {
    authUserState: userReducer,
    commonState: SharedCommonReducer,
};

interface CommonState {
    authUserState: AuthUserState;
    commonState: SharedCommonState;
}

const reducer: ActionReducer<CommonState> = combineReducers(reducers);

function commonReducer(state: any, action: any) {
    return reducer(state, action);
}

export { commonReducer, CommonState };

// export selectors
export const selectAuthData = (state: CommonState) => state.authUserState.authData as AuthData;
export const selectRole = (state: CommonState) => state.authUserState.authData?.role;
export const selectTranslation = (state: CommonState) => state.commonState.localization;
export const selectIsLoading = (state: CommonState) => state.commonState.isLoading;
export const selectDialog = (state: CommonState) => state.commonState.dialog as DialogModel;


