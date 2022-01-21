import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sideBarReducer from './sideBarReducer';
import UsersReducer from "./usersReducer";
import UsersCReducer from "./usersCReducer";
import authReducer from "./authReducer";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
    sidePage:sideBarReducer,
    userPage:UsersReducer,
    userPageC:UsersCReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// let store = createStore(reducers, applyMiddleware(thunk)); 




export default store;