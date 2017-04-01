import Actions from './actionTypes'
import * as db from '../../firebase/database'
import { Observable } from "rxjs";


export function bloodRequest(requiredblood){
dispatch =>{
    dispatch(BloodRequest());
    return db.database.ref('/user').orderByChild('isDonor').equalTo(true).once('value',snapshot=>{
        const donor = [];
        snapshot.forEach(childSnapshot=>{
            donor.push(childSnapshot.val());
        })
dispatch(BloodRequestSuccess(donor))
    });
}



}


export  function BloodRequest(){
    return{
        type:Actions.BLOODREQUEST
    }
}
export  function BloodRequestSuccess(data){
    return{
        type:Actions.BLOODREQUESTSUCCESS,
        data
    }
}
export  function BloodRequestFailed(){
    return{
        type:Actions.BLOODREQUESTFAILED
    }
}