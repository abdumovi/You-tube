let elnavBtn = document.querySelector('.site-header__meny-span');
let elNav = document.querySelector('.hero__navigation');
let elnabSecondBtn = document.querySelector('.site-header__meny-second');
let elNavSecond = document.querySelector('.hero__second-nav');
let elnavClose = document.querySelector('.nav-close');
let elMenu = document.querySelector('.hero__main-nav');
elnavClose.addEventListener('click',function(){
  elNavSecond.classList.remove('hero__second-nav-tog');
});

elnabSecondBtn.addEventListener('click',function(){
  userbar.classList.remove('user-bar-block');
  elNavSecond.classList.toggle('hero__second-nav-tog');
  
});
elnavBtn.addEventListener('click',function(){
  elNav.classList.toggle('nav--btn');
  elMenu.classList.toggle('hero__main-nav-with');
});
// ==========================================user-bar
let userBtn = document.querySelector('.header--user');
let userbar = document.querySelector('.user-bar');

userBtn.addEventListener('click',function(){
  userbar.classList.toggle('user-bar-block');
  elNavSecond.classList.remove('hero__second-nav-tog');
});
// ====================================darc
let darcbtn = document.querySelector('.aparesens');
let bod = document.querySelector('body');
darcbtn.addEventListener('click',function(){
  bod.classList.toggle('darc');
});
// ====================================search
let form = document.querySelector('.site-header__form');
let filter = document.querySelector('.site-header__input');
let items = document.querySelector('.hero__row');
let filterName = document.querySelectorAll('.hero__iframe-title')

form.addEventListener('submit',function(e){
  e.preventDefault();
});


filter.addEventListener('keyup',function(e){
  let text = e.target.value.toLowerCase();
  Array.from(filterName).forEach(function(fil){
    let filtret = fil.firstChild.textContent;
    if(filtret.toLowerCase().indexOf(text) != -1){
      fil.parentElement.parentElement.parentElement.parentElement.style.display = "block";
    }else{
      fil.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    }

  });
});
