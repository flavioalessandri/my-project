// const elems = document.querySelectorAll('lottie-player');

//  function getOffsetPercent(el) { 
//   const rect = el.getBoundingClientRect();
//   const yDiff = Math.abs((window.innerHeight / 2) - (rect.top + rect.height / 2));
//   const yPercent = Math.min(1, Math.max(0, (rect.height - yDiff) / rect.height));
//   console.log("RETURN",Math.round(yPercent * 100) );
//   return Math.round(yPercent * 100); 
// } 

//   function scrub() { 
//      elems.forEach(el => { const container = (el.dataset.container) ? document.querySelector(el.dataset.container) : el;
//       console.log("el.dataset.container",el.dataset.container); 
//       console.log("EL",el);
//     el.seek(`${getOffsetPercent(container)}%`) }); 
//   }

 






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
    
    // if (event.preventDefault)  event.preventDefault();
    //   event.preventDefault();
    //   console.log("PREVENT DEF");
    //   event.returnValue = false;
    
}

function handle(delta) {

  console.log("HANDLE");
    var time = 1000;
    var distance =800;   

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

  console.log("LOT",lot.currentFrame);
   
  LottieInteractivity.create(lot);

}



function init(){

  var cont = document.documentElement;

  
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
  // window.onmousewheel = document.onmousewheel = wheel;
  window.onmousewheel = cont.onmousewheel = wheel;
console.log("CONT",cont.onmousewheel );
  
  window.addEventListener("scroll", animateSvg);
  
  // console.log(document.documentElement);
  // console.log(document.window);

  // window.addEventListener('scroll', function(event) { scrub(); }); 

  // animateSvg();
}



$(document).ready(init);


// (passiveSupported && active) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false); 