import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sideBarReducer from './sideBarReducer';
import UsersReducer from "./usersReducer";
import UsersCReducer from "./usersCReducer";
let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
    sidePage:sideBarReducer,
    userPage:UsersReducer,
    userPageC:UsersCReducer
});

let store = createStore(reducers); 




export default store;