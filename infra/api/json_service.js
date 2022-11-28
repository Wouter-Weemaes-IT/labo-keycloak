import {XMLHttpRequest} from "xmlhttprequest";

export function getStories(){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://localhost:3000/storyboard"
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

export function deleteStories(id){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = `http://localhost:3000/storyboard/${id}`
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
export function Update(id, story){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = `http://localhost:3000/storyboard/${id} ${story}`
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
export function getPoints(){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "http://localhost:3000/storypoints"
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
