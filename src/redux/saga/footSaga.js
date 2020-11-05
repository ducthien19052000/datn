import {ActionType, getDataSuccess} from '../Action/index'
import {fork, put, take} from 'redux-saga/effects'

function* fetchListFood(){
    while(true){
      yield take(ActionType.GET_DATA)
        const requestGet = yield fetch(`https://5e7febfb7a92ed001656095b.mockapi.io/product`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })
                
        })
        const resp = yield requestGet.json();
            yield put(getDataSuccess(resp));

    }
   
}

function* rootSaga (){
    yield fork(fetchListFood);

}

export default rootSaga;