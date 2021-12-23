import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sideBarReducer from './sideBarReducer';
import UsersReducer from "./usersReducer";
import UsersCReducer from "./usersCReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
    sidePage:sideBarReducer,
    userPage:UsersReducer,
    userPageC:UsersCReducer,
    auth:authReducer
});

let store = createStore(reducers, applyMiddleware(thunk)); 




export default store;