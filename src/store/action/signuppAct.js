import Actions from './actionTypes'
import * as db from '../../firebase/database'


export function signuppRequest(signppData){
    return dispatch =>{
dispatch(SignuppRequest());
db.auth.createUserWithEmailAndPassword(
    signppData.email,signppData.password
)
.then((data)=>{
    const userRef = db.database.ref('/SigninUser/'+data.uid);
    userRef.set({
        uid:data.uid,
        name:signppData.name,
        email:data.email
    },
    signuppSuccessData=>{
        dispatch(SignuppRequestSuccess({
uid:data.uid,
name:signppData.name,
        email:data.email,

        }))
    }
    )
})
.catch((error)=>{
    alert('error hai apkeeeee code mai')
    dispatch(SignuppRequestFailed(error))
})

    }

}



 export  function SignuppRequest(){
return{

type : Actions.SIGNUPPREQUEST
}
}
export  function SignuppRequestSuccess(data){
return{

type : Actions.SIGNUPPREQUESTSUCCESS,
data


}
}

export  function SignuppRequestFailed(){
return{

type : Actions.SIGNUPPREQUESTFAILED


}
}