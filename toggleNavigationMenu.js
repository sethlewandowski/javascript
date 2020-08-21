"use strict";

// open and close nav drawer (button functionality)
function toggleNavigationMenu() { 
	const nav = document.getElementById("nav-menu"); // get hidden nav
  const background = document.getElementsByTagName('main')[0]; // get main part of document

  if (nav.style.height === ""){         // if nav is hidden
  	nav.style.height = "325px";         // open drawer to stated size
    background.style.opacity = ".3";    // and dim the background
  } else {                              // trigger if function is called and nav is already open 
  	nav.style.height = "";              // make drop down nav go away
    background.style.opacity = "";      // make opaque background go away
  } 
}

// Detect click outside of nav drawer
document.addEventListener("click", (click) => {     

    const nav = document.getElementById("nav-menu");    // get navigation menu
    const background = document.getElementsByTagName('main')[0]; // get page content

    const menuButton = document.getElementById("hamburger");    // get navButton
    let targetElement = click.target;                           // assign target to const

    if (targetElement != nav && targetElement != menuButton) {  // if usr clicks on anything but nav or nav button
      nav.style.height = "";                                    // hide nav
      background.style.opacity = "";                            // 
    }

});