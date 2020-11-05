import foodReducer from './foodReducer'

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    foodData: foodReducer,
});
export default rootReducer;