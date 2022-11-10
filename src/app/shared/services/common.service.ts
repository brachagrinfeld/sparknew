import { ElementRef } from '@angular/core';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/app-state.index';
import { setIsLoading } from '../state/actions/‏‏shared-common.action';
import { HttpClient } from '@angular/common/http';
import { DecodingTokenModel } from '../model/decoding-token.model';
@Injectable()
export class CommonService {

  constructor(private store: Store<AppState>, private httpClient: HttpClient) {
  }

  public blockScreen(divElement?: any) {
    this.setIsLoading(true, divElement);
  }

  public unblockScreen() {
    this.setIsLoading(false);
  }

  private setIsLoading(isLoading: boolean, divElement?: ElementRef) {
    this.store.dispatch(setIsLoading({ isLoading }));
  }

  decodingToken(request: DecodingTokenModel) {
    return this.httpClient.post('/Clearing/DecodingToken', request);
  }
}
