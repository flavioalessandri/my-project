function wheel(event) {
    var delta = 0;
    console.log("EVENT", event);
    if (event.wheelDelta) 
    {
      delta = event.wheelDelta / 120; //metodo che utilizza DOMMouseScroll su browser CHROME
    // console.log("DELTA CON WHEELDELTA", event.wheelDelta);
      console.log("WHEEL DELTA", event.wheelDelta);
    }
      // console.log("DELTA", delta);    
    else if (event.detail) 
    {
      delta = -event.detail / 3; //metodo che utilizza DOMMouseScroll su browser MOZILLA
      // console.log("event.detail", event.detail);}
      console.log("event.detail ", event.detail );
      // console.log("event.wheelDelta", event.wheelDelta);
      // console.log("DELTA",delta);

    }
      handle(delta); 
    
    if (event.preventDefault)  event.preventDefault();
    //   event.preventDefault();
    //   console.log("PREVENT DEF");
    //   event.returnValue = false;
    
}

function handle(delta) {

  console.log("HANDLE");
    var time = 1000;
    var distance = 600;   

    $('.container').stop().animate({
      scrollTop: $(window).scrollTop() - (distance * delta)
  }, time );


}

function animateSvg(){

  var lot = {
    mode: 'scroll',
    player: '#firstLottie',
    // container: document.documentElement,
    container: "#gap",
    actions: [ 
      {
        visibility: [0,1],
        type: 'seek',
        frames: [0, 50],
      },
    ],
  };  
   
  LottieInteractivity.create(lot);

}



function init(){

  
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  window.onmousewheel = document.onmousewheel = wheel;
  
  window.addEventListener("scroll", animateSvg);
  
  console.log(document.documentElement);
  console.log(document.window);

  animateSvg();
}



$(document).ready(init);


// (passiveSupported && active) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false); 