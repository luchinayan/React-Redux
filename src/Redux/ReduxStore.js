import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk";
import {AppReducer} from "./AppReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: AppReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store
export default store;

