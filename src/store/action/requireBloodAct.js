import Actions from './actionTypes'
import * as db from '../../firebase/database'



export function bloodRequest(requiredblood){
dispatch =>{
    dispatch(BloodRequest());
    return db.database.ref('/user').orderByChild('isDonor').equalTo(true).on('value',snapshot=>{

        console.log(snapshot.val(),"...............")

        const donor = [];
        console.log('fareed',donor)
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