import {ActionType, getDataSuccess} from '../Action/index'
import {fork, put, take} from 'redux-saga/effects'

function* fetchListFood(){
    while(true){
      yield take(ActionType.GET_DATA)
        const requestGet = yield fetch(`https://website-fpoly-food.herokuapp.com/product/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })
                
        })
        const resp = yield requestGet.json();
     
            yield put(getDataSuccess(resp.body.content));

    }
   
}


function* rootSaga (){
    yield fork(fetchListFood);

}

export default rootSaga;