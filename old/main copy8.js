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

function mobileChk(){
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};


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

console.log(mobileChk()); 

//verifica se si sta navigando su mobile o su desktop
 
if(mobileChk()===false){ //------------------------------se Desktop
  alert("false");
  
}else{   //----------------------------------------------se Mobile
  alert("TRUE");
}



console.log("WINDOW",window.mobileCheck);

  
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
