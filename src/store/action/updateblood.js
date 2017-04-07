import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function updateBlood(updateBlood) {
    dispatch => {
        dispatch(UpdateBlood());
        return db.database.ref('/userBlood' + updateBlood.uid + '/bloodGroup').set('false', (data) => {
            return db.database.ref('/userBlood').orderByChild("bloodGroup").equalTo(true).once('value', snap => {
                const bloodTodo = [];
                snap.forEach(childSnapshot => {
                    console.log(';;;;;;;;;;;;', childSnapshot.val());
                    bloodTodo.push(childSnapshot.val())
                })
                dispatch(UpdateBloodSuccess(bloodTodo));
            });

        });
    }
}



export function UpdateBlood() {
    return {
        type: Actions.UPDATEBLOOD
    }
}
export function UpdateBloodSuccess(data) {
    return {
        type: Actions.BLOODREQUESTSUCCESS,
        data
    }
}
