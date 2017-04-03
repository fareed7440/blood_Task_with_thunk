import Actions from './actionTypes'
import * as db from '../../firebase/database'

export default class BloodAction {

    static bloodReq(bloodGroup) {
     
       return (dispatch) => {

//console.log("your userdetatilaction is working properly")
   // console.log(bloodgroup)
    var arr = [];
    var donors = []
    switch (bloodGroup) {
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
          db.database().ref().child('user/' + v + '/').on('value', (data) => {
            var obj = data.val();

            console.log(obj)

            for (var prop in obj) {

              arr.push(obj[prop]);
              console.log(arr);

            }
          })
        )
      })
    })
 dispatch(this.BloodRequestSuccess(arr))


            // dispatch(BloodAction.BloodRequest());
            // return db.database.ref('/user').on('value', snapshot => {
            //     console.log(snapshot.val(), "...............")
            //     const todo = [];
            //     snapshot.forEach(childSnapshot =>{
            //         todo.push(childSnapshot.val());
            //     })
            //     console.log('fareed', todo)
            //     dispatch(this.BloodRequestSuccess(todo)
            //     )
            // });
         }
        // static bloodReq(req) {
        //     return () => {
        //         alert()
        //     }

        // return (dispatch) => {
        //     alert()
        //     dispatch(BloodAction.BloodRequest());
        //     return db.database.ref('/user').orderByChild('isDonor').equalTo(true).on('value', snapshot => {

        //         console.log(snapshot.val(), "...............")

        //         const donor = [];
        //         console.log('fareed', donor)
        //         dispatch(BloodRequestSuccess(donor))
        //     });


        // }
    }



    static BloodRequest() {
        //alert("26")
        return {
            type: Actions.BLOODREQUEST
        }
    }

    static BloodRequestSuccess(data) {
    return {
        type: Actions.BLOODREQUESTSUCCESS,
        data
    }
}
}
// static BloodRequestFailed(){  
//       return {
//        type: Actions.BLOODREQUESTFAILED
//     }

// }

// export function bloodRequest(requiredblood) {
//     console.log("=============" , requiredblood)
//     dispatch => {
//         // dispatch(BloodRequest());
//         // return db.database.ref('/user').orderByChild('isDonor').equalTo(true).on('value', snapshot => {

//         //     console.log(snapshot.val(), "...............")

//         //     const donor = [];
//         //     console.log('fareed', donor)
//         //     dispatch(BloodRequestSuccess(donor))
//         // });
//     }



// }


// export function BloodRequestSuccess(data) {
//     return {
//         type: Actions.BLOODREQUESTSUCCESS,
//         data
//     }
// }
// export function BloodRequestFailed() {
//     return {
//         type: Actions.BLOODREQUESTFAILED
//     }
 