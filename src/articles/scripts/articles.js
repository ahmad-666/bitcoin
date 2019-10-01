import util from '../../utilities/utilities.js' ;
let articles = document.querySelector('main .articles') ;
articles.querySelectorAll('.ellipse').forEach(ellipse => {
    new util.checkEllipse(ellipse,'right') ;
})