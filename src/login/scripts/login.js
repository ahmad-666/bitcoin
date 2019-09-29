import util from '../../utilities/scripts/form.js' ;
document.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new util.LabelHandler(labelHandler) ;
})
let loginForm = document.querySelector('form#login') ;
let loginSubmit = loginForm.querySelector('button[type="submit"].final') ;
let loginInputs = loginForm.querySelectorAll('.validate') ;
new util.FormValidate(loginForm,loginSubmit,loginInputs,true);