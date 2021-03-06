import {ActionType} from '../Action/index'

const list ={
    lists: []
}

const foodReducer = (state=list,action) => {
    switch (action.type){
        case ActionType.GET_DATA:{
            return {...state}
        }
      
        case  ActionType.GET_DATA_SUCCESS: {
        
            return {...state, lists: action.payload.map((el, index) => ({...el, key: index}))}
          }
        case ActionType.GET_DATA_ERROR:{
            return {...state}
        }
        default:
            return state;
    }
}

export default foodReducer;
