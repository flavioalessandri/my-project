function addListenerMulti(element, eventNames, listener) {
  var events = eventNames.split(' ');
  for (var i=0, iLen=events.length; i<iLen; i++) {
  element.addEventListener(events[i], listener, false);
  }
}

// function elementRotation(ev){
//   var rotate = document.querySelector('.rotate');
//   console.log("EV",ev);  
//   rotate.classList.add('rotation');
//   setTimeout (() => {rotate.classList.remove('rotation')},5000)
// }


function wheelSmartphone(){
  var popups = document.querySelectorAll('div.popup');
  var markerPositionY = document.querySelector('.marker').getBoundingClientRect().y;
  var markerPositionBottom = document.querySelector('.marker').getBoundingClientRect().y;
  // console.log(document.querySelector('.marker').getBoundingClientRect());
  console.log(markerPositionY);
  console.log(markerPositionBottom);
  if(markerPositionY >-2000 || markerPositionBottom >-2000 ) { 
    [].forEach.call(popups, (popup) => popup.classList.remove('fadeIn'));
  }
  else {
     [].forEach.call(popups, (popup) => popup.classList.add('fadeIn'));  
    }    
}

function wheel(event) {
  var popups = document.querySelectorAll('div.popup');
  var markerPositionY = document.querySelector('.marker').getBoundingClientRect().y;
  var markerPositionBottom = document.querySelector('.marker').getBoundingClientRect().y;
  // console.log(document.querySelector('.marker').getBoundingClientRect());
  // console.log(markerPositionY);
  // console.log(markerPositionBottom);
  if(markerPositionY >-2000 || markerPositionBottom >-2000 ) {
     [].forEach.call(popups, (popup) => popup.classList.remove('fadeIn'));
    }
  else {
     [].forEach.call(popups, (popup) => popup.classList.add('fadeIn'));  
    }

    var delta = 0;
    // console.log("EVENT", event);
    if (event.wheelDelta) 
    {
      delta = event.wheelDelta / 120; //metodo che utilizza DOMMouseScroll su browser CHROME
    // console.log("DELTA CON WHEELDELTA", event.wheelDelta);
      // console.log("WHEEL DELTA", event.wheelDelta);
    }
      // console.log("DELTA", delta);    
    else if (event.detail) 
    {
      delta = -event.detail / 3; //metodo che utilizza DOMMouseScroll su browser MOZILLA
      // console.log("event.detail", event.detail);}
      // console.log("event.detail ", event.detail );
      // console.log("event.wheelDelta", event.wheelDelta);
      // console.log("DELTA",delta);

    }
      handle(delta); 
    
    if (event.preventDefault) { ()=>  event.preventDefault() } //utilizzando questo sistema prevengo il comportamento di default del Browser
    //   event.preventDefault();
    //   console.log("PREVENT DEF");
    //   event.returnValue = false;
    
}

function handle(delta) {

  // console.log("HANDLE");
    var time = 1000;
    var distance =400;   

    $(document.documentElement).stop().animate({
      scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );


}


function animateSvg(event){

  var rotate = document.querySelector('.rotate'); 
//  var degree = Math.round(Math.sin(10000/window.scrollY)*120);
 rotate.classList.add('rotation');
  setTimeout (() => {rotate.classList.remove('rotation')},1000)

//  rotate.style.transform = `rotate(${degree}deg)`;

  var lot = {
    mode: 'scroll',
    player: '#firstLottie',
    container: document.documentElement,
    // container: "#gap",
    actions: [ 
      {
        visibility: [0,0.1],
        type: 'stop',
        frames: [0],
      },
      {
        visibility: [0.1,.9],
        type: 'seek',
        frames: [0, 129],
      },
      {
        visibility: [.9,1],
        type: 'stop',
        frames: [130],
      }
    ],
  };  

 
  

  

  // wheel(event);

  // if (event.preventDefault) { ()=>  event.preventDefault() }

   
  LottieInteractivity.create(lot);

}



function init(){

  
  var cont = document.documentElement;
  
  //-------------------------------------------------------------------------------------------------
  // Test via a getter in the options object to see if the passive property is accessed
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}
  
  // Use our detect's results. passive applied if supported, capture will be false either way.
  // elem.addEventListener('touchstart', fn, supportsPassive ? { passive: true } : false);
  //-------------------------------------------------------------------------------------------------
  
  

 
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);

  // window.addEventListener("touchend", wheel, {passive: true});
  window.addEventListener('touchstart', wheelSmartphone, supportsPassive ? { passive: true } : false);

  window.onmousewheel = cont.onmousewheel = wheel;
 
  window.addEventListener("scroll", animateSvg);

}


$(document).ready(init);
