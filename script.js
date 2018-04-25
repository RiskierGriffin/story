function initialize(){
    count = 0;
    storyIndex = 0;
    container = document.getElementById("form");
    userWords = [];
    storySplitter();
    formCreate();
    
}
function storySplitter(){
    splitStory = STORIES[storyIndex].split(DELIMITER);
    for(var i = 1;i < (splitStory.length); i= i+2){
        userWords.push(splitStory[i]);
        
    }
}
function formCreate(){
    for(var i = 0; i < userWords.length; i++){
        container.appendChild(document.createTextNode(userWords[i]));
        var input = document.createElement("input");
        input.type = "text";
        input.name = userWords[i];
        container.appendChild(input); 
        container.appendChild(document.createElement("br"));
    }
}
function replaceWords(){
    alert(splitStory);
}
function getForm(){
    searchStr = location.search;
    searchStr = searchStr.substring(1);
    pairArray = searchStr.split("&");
    alert(searchStr);
    alert(pairArray);
}