let d = 0;
let a = 0;
const hide = () => {
  if (d === 0) {
    document.querySelector(".menu-nav").style.visibility = "visible";
    document.querySelector(".hide").style.visibility = "hidden";
  } else {
    document.querySelector(".menu-nav").style.visibility = "hidden";
    document.querySelector(".hide").style.visibility = "visiblem";
  }
};
const show = () => {
  if (a === 0) {
    document.querySelector(".menu-nav").style.visibility = "hidden";
    document.querySelector(".hide").style.visibility = "visible";
  } else {
    document.querySelector(".menu-nav").style.visibility = "visible";
    document.querySelector(".hide").style.visibility = "hidden";
  }
};
