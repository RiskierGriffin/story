function initialize(){
    storyIndex = 0;
    alert(STORIES[1]);
    storySplitter();
}
function storySplitter(){
    splitStory = STORIES[storyIndex].split(DELIMITER);
    alert(splitStory[0]);
    for(var i = 1;i < (STORIES[storyIndex].length); i=i+2){
        alert(splitStory[i]);
    }
}