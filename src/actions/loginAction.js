var loginJson = require('../json/login.json');
import {actionCreator} from 'actions/actionCreator';
import {USER_LOGIN} from 'sources/constants';

export const userLoginAction = actionCreator(USER_LOGIN,'login_data');

export const userLogin = () => {
    return (dispatch) => {
        dispatch(userLoginAction(loginJson));
    }
};