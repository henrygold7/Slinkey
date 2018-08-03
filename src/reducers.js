import { combineReducers } from 'redux';
import {
    FETCHING,
    RECEIVE_USER,
    LOGIN_ERROR,
    SIGNUP_ERROR,
    RECEIVE_FOLDERS,
    RECEIVE_LINKS,
    ADD_LINK,
    ADD_FOLDER,
    ADD_TO_FOLDER,
    REMOVE_LINK,
    ACTIVATE_FOLDER,
    DEACTIVATE_FOLDER,
    REMOVE_FOLDER
} from './actions.js'

function setFetching(state = false, action){
    switch (action.type){
        case FETCHING:
            return !state
        default:
            return state
    }
}
function throwLoginError(state = false, action){
    switch (action.type){
        case LOGIN_ERROR: 
            return true
        default:
            return state
    }
}
function throwSignupError(state = false, action){
    switch (action.type){
        case SIGNUP_ERROR:
            return !state
        default:
            return state
    }
}
function activatedFolder(state = {}, action){
    switch (action.type){
        case ACTIVATE_FOLDER:
            return action.folder
        case DEACTIVATE_FOLDER:
            return {}
        default:
            return state
    }
}
function receivedUser(state = {}, action){
    switch (action.type){
        case RECEIVE_USER:
            return action.user
        default:
            return state
    }
}
function alterFolders(state = [], action){
    switch (action.type){
        case RECEIVE_FOLDERS:
            return action.folders
        case ADD_FOLDER: 
            return state.concat(action.folder) //tacks onto the end of folders
        case REMOVE_FOLDER:
            return state.filter(f => 
                f.id !== action.folder.id)
        default:
            return state
    }
}
function alterLinks(state = [], action){
    switch (action.type){
        case RECEIVE_LINKS:
            return action.links
        case ADD_LINK:
            return [action.link].concat(state) // tacks onto the front of openLinks
        case ADD_TO_FOLDER:
            return state 
        case REMOVE_LINK:
            return state.filter(l => 
                    l.id !== action.link.id
                )
        default:
            return state 
    }
}

export default function rootReducer(state = {}, action){
    return{
        isFetching: setFetching(state.isFetching, action),
        loginError: throwLoginError(state.loginError, action),
        signupError: throwSignupError(state.signupError, action),
        currentUser: receivedUser(state.currentUser, action),
        activeFolder: activatedFolder(state.activeFolder, action),
        folders: alterFolders(state.folders, action),
        openLinks: alterLinks(state.openLinks, action)
    }
}