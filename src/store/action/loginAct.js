import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function LoginRequest (loginData){
    return dispatch =>{
        dispatch(loginRequest());
     db.auth.signInWithEmailAndPassword(
         loginData.email,loginData.password
     )
     .then((data)=>{
         return db.database.ref('/user').on('value',snapshot=>{
var allInfo = snapshot.val()
//allInfo.uid = data.uid;
dispatch(loginRequestSuccess(allInfo))
         })
     })
     .catch((error)=>{
         alert('failed')
         dispatch(loginRequestFailed(error))
     })
    }
}


export function loginRequest(){
    return{
        type:Actions.LOGINREQUEST
    }
}

export  function loginRequestSuccess(data){
    return{
        type:Actions.LOGINREQUESTSUCCESS,
        data
    }
}

export  function loginRequestFailed(){
    return{
        type:Actions.LOGINREQUESTFAILED
        
    }
}

