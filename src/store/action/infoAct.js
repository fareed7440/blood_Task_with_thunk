import Actions from './actionTypes'
import * as db from '../../firebase/database'
import { browserHistory } from 'react-router';
export function signupRequest(signData) {
    return dispatch => {
        dispatch(signUpReQ());
        // return db.database.ref('/userBlood/'+signData.uid +'/bloodGroup').push(signData,(data)=>{
        //     return db.database.ref('/userBlood').orderByChild("bloodGroup").equalTo(true).once('value',(snap=>{
        //         const todo =[];
        //         snap.forEach(childSnapshot=>{
        //             console.log("wwwwwwwwwwwwwwwwwwwwwww",childSnapshot.val())
        //             todo.push(childSnapshot.val())

        //         })
        //     }))
        // })
        return db.database.ref('/userBlood').push(signData).then((data) => {
            return db.database.ref('/userBlood').once('value', snap => {
                const todo = [];
                snap.forEach(childSnap => {
                    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', childSnap.val())
                    todo.push(childSnap.val())
                })
            })
                .then((data) => {
                    dispatch(signUpReQSuccess(data))
                    alert('successFully addad')
                    browserHistory.push('/requireBloodCon')

                })
                .catch((error) => {
                    dispatch(signupRequestfialed(error));
                })

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