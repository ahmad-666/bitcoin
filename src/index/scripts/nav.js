import util from '../../utilities/utilities.js' ;
import darkLogo from '../../assets/imgs/logoDark.png';
import whiteLogo from '../../assets/imgs/logoWhite.png';
let fixMenu = document.querySelector('nav');
let logo = fixMenu.querySelector('.logo img') ;
util.fixMenu(fixMenu,true,logo,darkLogo,whiteLogo);