import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function signupRequest(signData){
    return dispatch=>{
        dispatch(signUpReQ());
        db.auth.createUserWithEmailAndPassword(
            signData.email,signData.password
        )
        .then((data)=>{
            const userRef = db.database.ref('/user'+data.uid);
            userRef.set({
                uid: data.uid,
                email:data.email,
                name:signData.name,
                gender:signData.gender==1 ? "male":'female',
                bloodGroup:signData.bloodGroup,

            },signupSuccess =>{
                dispatch(ignUpReQSuccess({
                     uid: data.uid,
                email:data.email,
                name:signData.name,
                gender:signData.gender==1 ? "male":'female',
                bloodGroup:signData.bloodGroup,

            }))
            
            }
                
            )
        })
        .catch((error)=>{
            alert('errrrrrrrrooroorrrrr')
            dispatch(signupRequestfialed(error));
        })
    }
}//main


export function signUpReQ(){
        return{
            type:Actions.SIGNUP_REQUEST
        }
}

export function signUpReQSuccess(data){
    return{
        type:Actions.SIGNUP_REQUEST_SUCCESS,
        data
    }
}

export function signupRequestfialed(){
    return{
        type:Actions.SIGNUP_REQUEST_FAILED
    }
}