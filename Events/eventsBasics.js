
// Remember Events are based upon the actions of the user. And it does according to this principal

// list of events and functions.
// 1).addeventlistener('here we mention type function like click, switch', function() {}) 
// this fucntion listens to your event and its type.
// Ex. document.getElementById('Photoshop').addEventListener('click', function(e){
//    console.log("You clicked Photoshop");        
// }, false)
// 2)Event Propogation :-
//      document.getElementById('Photoshop').addEventListener('click', function(e){
//    console.log("You clicked Photoshop");        
// }, false) this false at the end tells the layers of bubble therefore its also called Event bubbling.
//      this start to trace the bubble from bottom to top.
//3) Event Capturing :-
//    document.getElementById('Photoshop').addEventListener('click', function(e){
//    console.log("You clicked Photoshop");        
// }, true) when its true then it start to trace the bubble from top to bottom.
// 
// 4) event.stopPropagation() this stop the tracing part and prints the event.
// 5) event.preventDefault() this prevent any previoue default value to add shown
// 6) event.target  this target function will give us the whole image tag of the image we clicked on.
// 7) event.target.Id = this gives us the specific id which will be inside <li></li> tag
// 8) events.target.parentNode =this gives us the parent of the list item but we must know the type of tag or name.
// 9) events.target.tagname = this help to use parentNode to know which tag is used as a children.