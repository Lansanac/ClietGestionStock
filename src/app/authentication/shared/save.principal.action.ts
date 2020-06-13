import { Action } from '@ngrx/store';

import { Principal } from '../../shared/model/principal.model';

export const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL';

export class SavePrincipalAction implements Action {

  readonly type = SAVE_PRINCIPAL;

  constructor(public payload: Principal){

  }

}