import Actions from './actionTypes'
import * as db from '../../firebase/database'

export function signupRequest(signData){
    return dispatch=>{
        dispatch(signUpReQ());

<<<<<<< Updated upstream
=======
        return db.database.ref().child('/userBlood'+signData.bloodGroup+'/').push(signData)
.then((data)=>{
alert('successFully addad')
dispatch(signUpReQSuccess(data))
})
.catch((error)=>{
    dispatch(signupRequestfialed(error));
})
                // return db.database.ref('/user/').push(signData).then((data) => {
                //     return db.database.ref('/user').orderByChild('isDonar').once('value', snap => {
                //         const todo = [];
                //         snap.forEach(childSnapshot => {
                //             todo.push(childSnapshot.val());
                //         })
                //         alert("You have been added to Donar list.");
                //         dispatch(signUpReQSuccess(todo))
                //     });
                // });
            } 
        

>>>>>>> Stashed changes



         return db.database.ref().child('/userBlood'+signData.bloodGroup+'/').push(signData).then((data)=>{
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