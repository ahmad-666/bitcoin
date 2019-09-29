import util from '../../utilities/utilities.js' ;
let fixMenu = document.querySelector('nav');
let logo = fixMenu.querySelector('.logo img') ;
util.fixMenu(fixMenu,true,logo,'../assets/imgs/logoDark.png','../assets/imgs/logoWhite.png');