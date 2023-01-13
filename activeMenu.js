let openMenu = document.querySelector(".open__menu");
let closeMenu = document.querySelector(".close__menu");
let menu = document.querySelector(".main__nav__bar__section");
let navBar = [...document.querySelectorAll(".item__link")];

openMenu.addEventListener("click", ()=>{
  menu.classList.add("main__nav__bar__show");
  openMenu.classList.add("open__menu__disapear");
})

closeMenu.addEventListener("click", ()=>{
  menu.classList.remove("main__nav__bar__show");
  openMenu.classList.remove("open__menu__disapear");
})

navBar.forEach(option => {
  option.addEventListener("click",() => {
    let secondMenu = option.nextElementSibling;  
    let arrow = option.firstElementChild;
    arrow.classList.toggle("arrow__up");    
    secondMenu.classList.toggle ("second__menu__addpadding")

  })
})

