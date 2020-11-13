import foodReducer from './foodReducer'
import  groupReducer from './group-food'
import cart from './cartReducer'

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    foodData: foodReducer,
    groupData:groupReducer,
    cartData:cart
});
export default rootReducer;