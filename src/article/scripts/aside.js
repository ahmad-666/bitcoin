import util from '../../utilities/utilities.js' ;
let aside = document.querySelector('aside') ;
let popular = aside.querySelector('#popular');
let similar = aside.querySelector('#similars');
popular.querySelectorAll('.ellipse').forEach(ellipse => {
    util.checkEllipse(ellipse,'center') ;
})
similar.querySelectorAll('.ellipse').forEach(ellipse => {
    util.checkEllipse(ellipse,'right') ;
})