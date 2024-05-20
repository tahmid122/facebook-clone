let seeMore = document.querySelector(".see-more");
let seeLess = document.querySelector(".see-less");
let hidden = document.getElementById("hidden");

seeMore.addEventListener("click", () => {
  hidden.style.display = "block";
  seeMore.style.display = "none";
});

seeLess.addEventListener("click", () => {
  hidden.style.display = "none";
  seeMore.style.display = "flex";
});

// arrow btn

let rightbtn = document.querySelector(".story-arr2");
let leftBtn = document.querySelector(".story-arr");
let storyItem = document.querySelectorAll(".story-item");

rightbtn.addEventListener("click", () => {
  storyItem[0].style.display = "none";
  storyItem[1].style.display = "none";
  storyItem[2].style.display = "none";
  storyItem[3].style.display = "none";
  rightbtn.style.display = "none";
  leftBtn.style.display = "flex";
});
leftBtn.addEventListener("click", () => {
  storyItem[0].style.display = "flex";
  storyItem[1].style.display = "flex";
  storyItem[2].style.display = "flex";
  storyItem[3].style.display = "flex";
  rightbtn.style.display = "flex";
  leftBtn.style.display = "none";
});

let menuDetails = document.querySelector(".menu-details");
let menu = document.querySelector(".menu");

menu.addEventListener("click", toggle);
menu.addEventListener('click', ()=>{
  notDetails.style.display = 'none';
  accDetails.style.display = 'none';
  message.style.display = "none";
})
function toggle() {
  if (menuDetails.style.display === "none") {
    menuDetails.style.display = "flex";
  } else {
    menuDetails.style.display = "none";
  }
  message.style.display = "none";
}
let mess = document.querySelector(".hide-mess");
let message = document.querySelector(".mess-sha");

mess.addEventListener("click", toggoleMsg);
mess.addEventListener('click', ()=>{
  notDetails.style.display = 'none';
  accDetails.style.display = 'none';
})
function toggoleMsg() {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  menuDetails.style.display = "none";
}

let commBtn = document.querySelector(".comm-hs");
let commDetails = document.querySelector(".uni-comm");
let inBtn = document.querySelector(".in-hs");

inBtn.addEventListener("click", () => {
  commBtn.classList.remove("inco-active");
  inBtn.classList.add("inco-active");
  commDetails.style.display = "none";
});
function toggleCommBtn() {
  commBtn.classList.add("inco-active");
  inBtn.classList.remove("inco-active");

  commDetails.style.display = "block";
}
commBtn.addEventListener("click", toggleCommBtn);



let notBtn = document.querySelector('.not-sh');
let notDetails = document.querySelector('.notification-section');

notBtn.addEventListener('click', ()=>{
  menuDetails.style.display = "none";
  message.style.display = "none";
  accDetails.style.display = 'none';
})
function toddleNotBtn(){
  if(notDetails.style.display === 'none'){
    notDetails.style.display = 'block';
  }
  else{
    notDetails.style.display = 'none';
  }
}
notBtn.addEventListener('click', toddleNotBtn);

let accBtn = document.querySelector('.hrimg')
let accDetails = document.querySelector('.acc-sec');

function toogleAccBtn(){
  notDetails.style.display = 'none';
  message.style.display = "none";
  menuDetails.style.display = "none";
  if(accDetails.style.display === 'none'){
    accDetails.style.display = 'block';
  }else{
    accDetails.style.display = 'none';
  }
}
accBtn.addEventListener('click', toogleAccBtn);



let msgShow = document.querySelector('.msgShow');
let msgShow2 = document.querySelector('.msgShow2');
let msgShow3 = document.querySelector('.showMsg3');
let msgShow4 = document.querySelector('.showMsg4');
let msgHide = document.querySelector('.msgHide');
let msgHide2 = document.querySelector('.msgHide2');
let messagePop = document.querySelector('.message-pop');

let messagePop2 = document.querySelector('.message-pop2');


msgShow.addEventListener('click', ()=>{
  messagePop.style.display = 'block';
  message.style.display = "none";
});
msgShow4.addEventListener('click', ()=>{
  messagePop2.style.display = 'block';
  message.style.display = "none";
});
msgShow3.addEventListener('click', ()=>{
  messagePop2.style.display = 'block';
  // message.style.display = "none";
  console.log('hello')
});


msgShow2.addEventListener('click', ()=>{
  messagePop.style.display = 'block';
  message.style.display = "none";
});

msgHide.addEventListener('click', ()=>{
  messagePop.style.display = 'none';
});

msgHide2.addEventListener('click', ()=>{
  messagePop2.style.display = 'none';
});



let postCross = document.querySelector('.pph-cross');
let writePost = document.querySelector('.post-pop');
let showPost = document.querySelector('.showPost');

let body = document.querySelector('body');
let leftSide = document.querySelector('#left-side');
let rightSide = document.querySelector('#right-side');

showPost.addEventListener('click', ()=>{
  writePost.style.display = 'block';
});
postCross.addEventListener('click', ()=>{
  writePost.style.display = 'none';
});


if(screen.width <= 1450){
  document.write('hello');
  console.log('hello');
  body.innerHTML = '<h1>This demo webpage is not responsive.Your device width must be grater than 1450px for see this webpage.</h1>';

  // body.style.display = 'none';

}