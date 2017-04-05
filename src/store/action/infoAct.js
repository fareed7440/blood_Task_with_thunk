import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function signupRequest(signData) {
    return dispatch => {
        dispatch(signUpReQ());
        return db.database.ref('/userBlood').push(signData)
            .then((data) => {
                alert('successFully addad')
                dispatch(signUpReQSuccess(data))
            })
            .catch((error) => {
                dispatch(signupRequestfialed(error));
            })
   
    }

}



export function signUpReQ() {
    return {
        type: Actions.SIGNUPREQUEST
    }
}

export function signUpReQSuccess(data) {
    return {
        type: Actions.SIGNUPREQUESTSUCCESS,
        data
    }
}

export function signupRequestfialed() {
    return {
        type: Actions.SIGNUPREQUESTFAILED
    }
}