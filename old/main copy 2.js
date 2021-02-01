
// Get a reference to the <path>
var path = document.querySelector('#prova');

console.log("var path", path);

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();
// console.log("var pathLength", pathLength);

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;


// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();


// When the page scrolls...
window.addEventListener("scroll", function(e) {
    
    // What % down is it? 
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log("SCROLLPERCENTAGE",scrollPercentage);
    console.log("SCROLLPERCENTAGE*100",scrollPercentage*100);
    console.log(path.style.strokeDashoffset );
    // console.log("CLIENTHEIGHT",document.documentElement.clientHeight);
    // console.log("SCROLLHEIGHT",document.documentElement.scrollHeight);
  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage*5;
  
  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
  


  // if( (scrollPercentage) >40 ){
  //     document.body.style.backgroundColor= "blue";
  // } else{
  //   document.body.style.backgroundColor= "white";
  // }
    
  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math

  if (scrollPercentage >= 0.2) {
    // alert("NOO");
    
    path.style.strokeDasharray = .1;
    
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    
  }
  
});


