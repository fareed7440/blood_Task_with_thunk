import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function signupRequest(signData){
    return dispatch=>{
        dispatch(signUpReQ());




         return db.database.ref('/user/').push(signData).then((data)=>{
             alert ('sucessfully added')
        dispatch(signUpReQSuccess(data));
         })
         .catch(function(error){
             alert('sory you did some bund in your code')
           dispatch(signupRequestfialed());
         })
       // ) 
       
        
    //    db.database.ref("/user").push(signData).then((data)=>{
    //          const userRef = db.database.ref('/user/'+data.uid);
    //         userRef.set({
    //             uid: data.uid,
    //             address:signData.address,
    //             age:signData.age,
    //             phone_no:signData.phone_no,
    //             email:data.email,
    //             name:signData.name,
    //             bloodGroup:signData.bloodGroup,

    //         },signupSuccess =>{
    //      dispatch(signUpReQSuccess({
    //                 uid: data.uid,
    //                   address:signData.address,
    //             age:signData.age,
    //             phone_no:signData.phone_no,
    //             email:data.email,
    //             name:signData.name,
    //         gender:signData.gender==1 ? "male":'female',
    //              bloodGroup:signData.bloodGroup,

    //         }))
            
    //        }
                
    //      )
    //      })
    //     .catch((error)=>{
    //          alert('errrrrrrrrooroorrrrr')
    //          dispatch(signupRequestfialed(error));
    //  })
     } 
}//main


export function signUpReQ(){
        return{
            type:Actions.SIGNUPREQUEST
        }
}

export function signUpReQSuccess(data){
    return{
        type:Actions.SIGNUPREQUESTSUCCESS,
        data
    }
}

export function signupRequestfialed(){
    return{
        type:Actions.SIGNUPREQUESTFAILED
    }
}