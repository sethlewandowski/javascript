"use strict";

let lastPosition = 100;             // initialize a threshold for hiding nav
window.onscroll = () => {           // when user scrolls, this fires
  
  if (screen.width < 800) {         // run only on mobile device
    let currentPosition = window.pageYOffset; // set currentPosition
    const nav = document.getElementById('nav-menu'); // get entire nav component

    if (currentPosition > lastPosition) {         // detect if user has scrolled down
      nav.style.display = "none";                 // if so, hide entire nav
    } else if (currentPosition < lastPosition) {  // but if user has scrolled up
      nav.style.display = "";                     // show nav again
    }
    lastPosition = currentPosition;               // reset value for 'lastPosition';
  }
}