let elnavBtn = document.querySelector('.site-header__meny-span');
let elNav = document.querySelector('.hero__navigation');
let elnabSecondBtn = document.querySelector('.site-header__meny-second');
let elNavSecond = document.querySelector('.hero__second-nav');
let elnavClose = document.querySelector('.nav-close');
let elMenu = document.querySelector('.hero__main-nav');
let darcSpan = document.querySelector('.site-header__span');
let darcbtn = document.querySelector('.aparesens');
let bod = document.querySelector('body');
let form = document.querySelector('.site-header__form');
let filter = document.querySelector('.site-header__input');
let items = document.querySelector('.hero__row');
let filterName = document.querySelectorAll('.hero__iframe-title');
let userBtn = document.querySelector('.header--user');
let userbar = document.querySelector('.user-bar');
// ==========================modals
let bel = document.querySelector('.bell');
let belBtn = document.querySelector('.bell-btn');
let frame = document.querySelector('.frame');
let frameBtn = document.querySelector('.frame-btn');
let addVideo = document.querySelector('.add-video__block');
let addVideoBtn = document.querySelector('.add-video');
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.voise--btn');
let modalClose = document.querySelector('.modal__btn');

modalClose.addEventListener('click',function(){
  modal.classList.remove('db-block');
  darcSpan.classList.remove('span--block');
  bod.classList.remove('over');
});

modalBtn.addEventListener('click',function(){
  modal.classList.toggle('db-block');
  darcSpan.classList.add('span--block');
  bod.classList.add('over');
});

addVideoBtn.addEventListener('click',function(){
  addVideo.classList.toggle('db-block');
  frame.classList.remove('db-block');
});

addVideoBtn.addEventListener('blur',function(){
  addVideo.classList.remove('db-block');
  
});


frameBtn.addEventListener('click',function(){
  frame.classList.toggle('db-block');
  addVideo.classList.remove('db-block');
});
frameBtn.addEventListener('blur',function(){
  frame.classList.remove('db-block');
});
belBtn.addEventListener('click',function(){
  bel.classList.toggle('db-block');
  frame.classList.remove('db-block');
});

belBtn.addEventListener('blur',function(){
  bel.classList.remove('db-block');
});
//===============================span-darc

darcSpan.addEventListener('click',function(){
  elNavSecond.classList.remove('hero__second-nav-tog');
  darcSpan.classList.remove('span--block');
  bod.classList.remove('over');
  userbar.classList.remove('user-bar-block');
  modal.classList.remove('db-block');
});

//=========================nav-left

elnavClose.addEventListener('click',function(){
  elNavSecond.classList.remove('hero__second-nav-tog');
  darcSpan.classList.remove('span--block');
  bod.classList.remove('over');
});

//=================user-bar

elnabSecondBtn.addEventListener('click',function(){
  userbar.classList.remove('user-bar-block');
  elNavSecond.classList.toggle('hero__second-nav-tog');
  darcSpan.classList.add('span--block');
  bod.classList.add('over');
  
});

//===========================nav-with

elnavBtn.addEventListener('click',function(){
  elNav.classList.toggle('nav--btn');
  elMenu.classList.toggle('hero__main-nav-with');
});

//==========================================user-bar


userBtn.addEventListener('click',function(){
  userbar.classList.toggle('user-bar-block');
  elNavSecond.classList.remove('hero__second-nav-tog');
});
userBtn.addEventListener('blur',function(){
  userbar.classList.remove('user-bar-block');
});
//====================================darc

darcbtn.addEventListener('click',function(){
  bod.classList.toggle('darc');
});

//====================================search


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
