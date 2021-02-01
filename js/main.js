
function wheel(event) {
  var popups = document.querySelectorAll('div.popup');

  var markerPositionY = document.querySelector('.palla').getBoundingClientRect().y;
  var markerPositionBottom = document.querySelector('.palla').getBoundingClientRect().y;
  console.log(document.querySelector('.palla').getBoundingClientRect());
  console.log(markerPositionY);
  console.log(markerPositionBottom);
  if(markerPositionY >-2000 || markerPositionBottom >-2000 )  [].forEach.call(popups, (popup) => popup.classList.remove('fadeIn'));
  else [].forEach.call(popups, (popup) => popup.classList.add('fadeIn'));  

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

function animateSvg(){

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
        visibility: [0.1,1],
        type: 'seek',
        frames: [0, 50],
      }
    ],
  };  

   
  LottieInteractivity.create(lot);

}



function init(){

  var cont = document.documentElement;
 
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);

  window.addEventListener("touchend", wheel, {passive: false});

  window.onmousewheel = cont.onmousewheel = wheel;
 
  window.addEventListener("scroll", animateSvg, {passive: false});

}


$(document).ready(init);
