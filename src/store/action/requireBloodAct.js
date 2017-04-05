import Actions from './actionTypes'
import * as db from '../../firebase/database'



export function bloodRequest(bloodgroup){


return dispatch => {
    console.log("your userdetatilaction is working properly")
    console.log(bloodgroup)
    var arr = [];
    var donors = []
    switch (bloodgroup) {
      case "A+":
        donors.push(['A+', 'O+', 'A-', 'O-']);

        break;

      case "B+": {
        donors.push(['B+', 'O+', 'B-', 'O-']);
        break;
      }
      case "AB+": {
        donors.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
        break;
      }
      case "O+": {
        donors.push(['O+', 'O-']);
        break;
      }
      case "A-": {
        donors.push(['A-', 'O-']);
        break;
      }
      case "B-": {
        donors.push(['B-', 'O-']);
        break;
      }
      case "AB-": {
        donors.push(['AB-', 'O-', 'A-', 'B-']);
        break;
      }
      case "O-": {
        donors.push(['O-']);
        break;
      }
    }
    donors.map((val, index) => {
      return val.map((v, i) => {
        return (
          db.database.ref().child('userBlood/' + v + '/').on('value', (data) => {
              //console.log('.......',snap.val())
           var obj = data.val();

            console.log(obj)

            for (var prop in obj) {

              arr.push(obj[prop]);
              console.log(arr);

            }
             dispatch(BloodRequestSuccess(arr))
          })
        )
      })
    })
   
}
}

// dispatch =>{
//     dispatch(BloodRequest());
//     return db.database.ref('/user').orderByChild('isDonor').equalTo(true).on('value',snapshot=>{

//         console.log(snapshot.val(),"...............")

//         const donor = [];
//         console.log('fareed',donor)
// dispatch(BloodRequestSuccess(donor))
//     });
// }



// }


  function BloodRequest(){
    return{
        type:Actions.BLOODREQUEST
    }
}
  function BloodRequestSuccess(data){
    return{
        type:Actions.BLOODREQUESTSUCCESS,
        data
    }
}
  function BloodRequestFailed(){
    return{
        type:Actions.BLOODREQUESTFAILED
    }
  }