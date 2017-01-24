import {USER_LOGIN} from 'sources/constants';

const initState = {
    login_data : {username:"",password:""}
};

export default (state = initState, action) => {
    switch(action.type){
        case USER_LOGIN:
            return Object.assign({},state,{login_data:action.login_data});
        default:
            return state;
    }
}