function initialize(){
    storyIndex = 0;
    alert(STORIES[1]);
    storySplitter();
}
function storySplitter(){
    splitStory = STORIES[storyIndex].split("**");
    alert(splitStory[1]);  
}