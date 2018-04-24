function initialize(){
    storyIndex = 0;
    userWords = [];
    storySplitter();
    formCreate();
    
}
function storySplitter(){
    splitStory = STORIES[storyIndex].split(DELIMITER);
    alert(splitStory);
    for(var i = 1;i < (splitStory.length); i= i+2){
        userWords.push(splitStory[i]);
        
    }
    alert(splitStory);
}
function formCreate(){
    for(var i = 0; i < userWords.length; i++){
        var newdiv = document.createElement('form');
        newdiv.innerHTML = userWords[i] + " <br><input type='text' name='userInput[]'>";
        document.getElementById("form").appendChild(newdiv);
    }
}
function replaceWords(){
    alert(splitStory);
}