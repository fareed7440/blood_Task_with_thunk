import Actions from './actionTypes'
import * as db from '../../firebase/database'
export function bloodRequest(bloodgroup) {
  // console.log('fffffff',ff)
  return (dispatch) => {
    dispatch(BloodRequest());
    return db.database.ref('/userBlood/').orderByChild(bloodgroup).equalTo(true).once('value', snapshot => {
      var array = [];
      snapshot.forEach(ChildSnapshot => {
        var data = ChildSnapshot.val();
        console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaa', ChildSnapshot.val());
        array.push(data)
      })
      dispatch(BloodRequestSuccess(array))
    });
  }
}
function BloodRequest() {

  return {
    type: Actions.BLOODREQUEST
  }
}

function BloodRequestSuccess(data) {
  return {
    type: Actions.BLOODREQUESTSUCCESS,
    data
  }

}

