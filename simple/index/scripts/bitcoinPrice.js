//import util from '../../utilities/utilities.js' ;
let bitcoinPrice = document.querySelector('#bitcoinPrice') ;
new AnimateCounter(bitcoinPrice.querySelector('.animateCounter')) ;
let movingBar = document.querySelector('#movingBar') ;
let movingSlider = movingBar.querySelector('.slider') ;
let slidesNum = movingSlider.querySelectorAll('.slide').length ;
let slideTime = 1500 ;
let movingAnime = null ;
if(window.innerWidth>1500) slideTime = 1000 ;
else if(window.innerWidth>1200&&window.innerWidth<=1500) slideTime = 1500 ;
else if(window.innerWidth>900&&window.innerWidth<=1200) slideTime = 2000 ;
else if(window.innerWidth>600&&window.innerWidth<=900) slideTime = 3000 ;
else if(window.innerWidth<=600) slideTime = 4000 ;
if(movingSlider.scrollWidth>movingSlider.offsetWidth){
    animateBar() ;
}
function animateBar(){
    movingSlider.addEventListener('mouseenter',pause) ;
    movingSlider.addEventListener('mouseleave',play) ;
    movingAnime = anime({
        targets: movingSlider ,
        duration: slideTime*slidesNum,
        easing:'linear',
        direction: 'alternate',
        loop: true,
        right: [`0px`,`-${movingSlider.scrollWidth-movingSlider.offsetWidth}px`]
    })
}
function play(e){
    movingAnime.play() ;
}
function pause(e){
    movingAnime.pause() ;
}
