//import util from '../../utilities/utilities.js' ;
let news = document.querySelector('#news') ;
let articles = document.querySelector('#articles') ;
news.querySelectorAll('.ellipse').forEach(ellipse => {
    checkEllipse(ellipse,'right') ;
})
articles.querySelectorAll('.ellipse').forEach(ellipse => {
    checkEllipse(ellipse,'right') ;
})
