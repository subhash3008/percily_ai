import * as actionType from './action-type';
import _api from '../../config/api';
import URLS from '../../config/api/urls';
import { createParamsString } from '../../utils/helper';

export const requestLogin = (params) => async (dispatch) => {
    const url = URLS.baseUrl + URLS.login;
    let response = null;
    try {
        response = await _api.post(url, params);
        console.log('RESPONSE FOR LOGIN API : ', response.data);
        dispatch({type: actionType.LOGIN , payload: response.data});
    } catch (e) {
        console.error(e);
    }
}

export const requestLogout = (params) => async (dispatch) => {
    const url = URLS.baseUrl + URLS.logout + createParamsString(params);
    let response = null;
    try {
        response = await _api.get(url);
        console.log('RESPONSE FOR LOGOUT : ', response.data);
        dispatch({type: actionType.LOGOUT , payload: response.data});
    } catch (e) {
        console.error(e);
    }
}