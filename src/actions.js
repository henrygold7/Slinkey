const axios = require('axios');
const Promise = require('bluebird');

export const FETCHING = 'FETCHING'; 
export const RECEIVE_USER = 'REQUEST_USER'; 
export const LOGIN_ERROR = 'LOGIN_ERROR'; 
export const SIGNUP_ERROR = 'SIGNUP_ERROR'; 
export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const RECEIVE_LINKS = 'RECEIVE_LINKS'; 
export const ADD_LINK = 'ADD_LINK';
export const ADD_FOLDER = 'ADD_FOLDER';
export const ADD_TO_FOLDER = 'ADD_TO_FOLDER';
export const REMOVE_LINK = 'REMOVE_LINK'; 
export const ACTIVATE_FOLDER = 'ACTIVATE_FOLDER';
export const DEACTIVATE_FOLDER = 'DEACTIVATE_FOLDER';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';

export function fetching(){
    return {
        type: FETCHING,
    }
}
export function receiveUser(json){
    console.log("RECEIVING USER ",json)
    return{   
        type: RECEIVE_USER,
        user: json
    }
}
export function loginError(source){
    return {
        type: LOGIN_ERROR,
        text: source
    }
}
export function signupError(){
    return {
        type: SIGNUP_ERROR
    }
}
export function receiveFolders(lst){
    return {
        type: RECEIVE_FOLDERS,
        folders: lst
    }
}
export function receiveLinks(lst){
    return {
        type: RECEIVE_LINKS,
        links: lst
    }
}
export function addFolder(json){
    return {
        type: ADD_FOLDER,
        folder: json
    }
}
export function addLink(json){
    return {
        type: ADD_LINK,
        link: json
    }
}
export function addToFolder(json){
    return {
        type: ADD_TO_FOLDER,
        link_on_folder: json
    }
}
export function removeLink(json){
    return {
        type: REMOVE_LINK,
        link: json
    }
}
export function activateFolder(obj){
    return {
        type: ACTIVATE_FOLDER,
        folder: obj
    }
}
export function deactivateFolder(){
    return{
        type: DEACTIVATE_FOLDER
    }
}
export function removeFolder(obj){
    return {
        type: REMOVE_FOLDER,
        folder: obj
    }
}
export function validateUser(user, password){
    return dispatch => {
        if (!user){
            return dispatch(loginError('wrongUsername'))
        }
        else if (user.password !== password){
            return dispatch(loginError('wrongPassword'))
        }
        return dispatch(receiveUser(user))
    }
}
export function postUser(name, userName, pass){
    return async dispatch => {
        dispatch(fetching())
        const {data: array} = await axios.get("http://127.0.0.1:8000/users?username="+userName);
        if (!array[0]) {
            try {
                const {data: user} = await axios.post("http://127.0.0.1:8000/users", {username: userName, password: pass, firstname: name} )
                const {data: favs} = await axios.post("http://127.0.0.1:8000/folders", {user_id: user.id, name: "Favorites"} );
                const {data: arch} = await axios.post("http://127.0.0.1:8000/folders", {user_id: user.id, name: "Archive"} );
                dispatch(receiveUser(user));
            }
            catch(err){
                alert("Something went wrong :(")
                console.log("ERROR ",err)
            }
        }
        else{
            dispatch(signupError())
        }
        return dispatch(fetching())
    }
}
export function requestUser(username, password){
    return async dispatch => {
        dispatch(fetching())
        try{
            const {data: array} = await axios.get("http://127.0.0.1:8000/users/?username="+username);
            dispatch(validateUser(array[0], password));
            dispatch(fetching());
            console.log("requestUser returning...")
            return array;
        }
        catch(err){
            dispatch(fetching())
            alert("Something went wrong :(")
            console.log("ERROR ",err)
            return;
        }
    }
}
export function requestFolders(userId){
    return async dispatch => {
        dispatch(fetching())
        try{
            const {data: array} = await axios.get("http://127.0.0.1:8000/folders?user_id="+userId); 
            dispatch(receiveFolders(array));
            dispatch(fetching());
            return array
        }
        catch(err){
            dispatch(fetching())
            alert("Something went wrong :(")
            console.log("ERROR ",err)
            return;
        }
  
    }
}
export function requestLinks(Id, type){
    "ENTERING REQUEST LINKS"
    if(type==="userId"){
        return async dispatch => {
            dispatch(fetching())
            try{
                const {data: array} = await axios.get("http://127.0.0.1:8000/links?user_id="+Id);
                console.log("ARRAY ",array)
                dispatch(receiveLinks(array));
                dispatch(fetching())
            }
            catch(err){
                dispatch(fetching())
                alert("Something went wrong :(")
                console.log("ERROR ",err)
                return;
            }
        }
    }
    else{
        return async dispatch => {
            dispatch(fetching())
            try{
                const {data: array} = await axios.get("http://127.0.0.1:8000/link_on_folders?folder_id="+Id)
                console.log("array of lofs: ",array)
                const result = await Promise.map(array, async (lof) => {
                    const {data: answer} = await axios.get("http://127.0.0.1:8000/links/"+lof.link_id);
                    return answer
                });
                console.log("ARRAY: ",result);
                dispatch(receiveLinks(result));
                dispatch(fetching());
                return result
            }
            catch(err){
                dispatch(fetching())
                alert("Something went wrong :(")
                console.log("ERROR ",err)
                return;
            }
        }
    }
}
export function postFolder(folderName, userId){
    return async dispatch => {
        try{
            dispatch(fetching())
            const {data: folder} = await axios.post("http://127.0.0.1:8000/folders", {name: folderName, user_id: userId} );
            dispatch(addFolder(folder));
            dispatch(fetching())
            return folder;
        }
        catch(err){
            dispatch(fetching())
            alert("Something went wrong :(")
            console.log("ERROR ",err)  
        }
    }
}
export function postLink(userId, href, title, folderId=null){
    return async dispatch => {
        dispatch(fetching())
        try{
            console.log("HERE");
            const {data: link} = await axios.post("http://127.0.0.1:8000/links", {user_id: userId, url: href, headline: title} );
            if(folderId){
                await dispatch(postLinkOnFolder(folderId, link.id))
            }
            dispatch(addLink(link));
            dispatch(fetching())
            return link
        }
        catch(err){
            dispatch(fetching())
            alert("Something went wrong :(")
            console.log("ERROR ",err)
        }
    }
}
export function postLinkOnFolder(folderId, linkId){
    return async dispatch => {
        try{
            dispatch(fetching())
            const {data: lof} = await axios.post("http://127.0.0.1:8000/link_on_folders", {link_id: linkId, folder_id: folderId} );
            dispatch(addToFolder(lof));
            dispatch(fetching());
            return
        }
        catch(err){
            dispatch(fetching())
            alert("Something went wrong :(")
            console.log("ERROR ",err)
        }
    }
}
export function isFavorite(linkId, favId){
    return async () => {
        try{
            const {data: array} = await axios.get("http://127.0.0.1:8000/link_on_folders?folder_id="+favId);
            var result = false;
            array.forEach((lof) => {
                if (lof.link_id === linkId){
                    result = true
                }
            })
            return result
        }
        catch(err){
            alert("Something went wrong :(")
            console.log("ERROR ",err)
        }
    }
}
export function isArchive(linkId, archId){
    return async () => {
        try{
            const {data: array} = await axios.get("http://127.0.0.1:8000/link_on_folders?folder_id="+archId);
            var result = false;
            array.forEach((lof) => {
                if (lof.link_id === linkId){
                    result = true
                }
            })
            return result
        }
        catch(err){
            alert("Something went wrong :(")
            console.log("ERROR ",err)
        }
    }
}
export function deleteLinkOnFolder(link, folderId=null, open=true){
    console.log("LINK ",link)
    if (folderId){
        return async dispatch => {
            dispatch(fetching())
            try{
                const {data: lof} = await axios.delete("http://127.0.0.1:8000/link_on_folders?folder_id="+folderId);
                if (open){
                    dispatch(removeLink(link))
                }
                dispatch(fetching())
                return
            }
            catch(err){
                dispatch(fetching())
                alert("Something went wrong :(")
                console.log("ERROR ",err)
            }
        }
    }
    else{
        // deleting from my links => must remove link from all folders
        return async dispatch => {
            dispatch(fetching())
            try{
                const {data: lofs} = await axios.delete("http://127.0.0.1:8000/link_on_folders?link_id="+link.id);
                console.log("LOFS deleted ")
                const {data: lnk} = await axios.delete("http://127.0.0.1:8000/links/"+link.id);
                dispatch(removeLink(link));
                dispatch(fetching())
                return
            }
            catch(err){
                dispatch(fetching())
                alert("Something went wrong :(")
                console.log("ERROR ",err)
            }
        }
    }
}
export function deleteFolder(obj){
    console.log("entering deleteFolder...")
    return async dispatch => {
        dispatch(fetching())
        try{
            await axios.delete("http://127.0.0.1:8000/link_on_folders?folder_id="+obj.id);
            await axios.delete("http://127.0.0.1:8000/folders/"+obj.id);
            dispatch(removeFolder(obj));
            dispatch(fetching())
            return
        }
        catch(err){
            dispatch(fetching());
            alert("Something went wrong :(")
            console.log("ERROR ",err)
            return
        }
    }
}
