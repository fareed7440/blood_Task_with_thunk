import Actions from './actionTypes';
import * as db from '../../firebase/database';

export function userRequest(loadUserData) {
    return dispatch => {
        dispatch(UserRequest());
    }
}

function UserRequest() {
    return {
        type: Actions.USERDATA
    };
}