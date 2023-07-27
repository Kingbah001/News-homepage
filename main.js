var harmburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector('.mobile-link-holder');
var backdropdiv = document.querySelector('.backdrop');

function dosomething(){
    harmburgerdiv.classList.toggle('showburger');
    mobileLinks.classList.toggle('show-mobile-link-holder')
    backdropdiv.classList.toggle('show-backdrop')
}