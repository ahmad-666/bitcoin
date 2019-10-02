//import util from '../../utilities/scripts/form.js' ;
document.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new LabelHandler(labelHandler) ;
})
let signupForm = document.querySelector('form#signup') ;
let signupSubmit = signupForm.querySelector('button[type="submit"].final') ;
let signupInputs = signupForm.querySelectorAll('.validate') ;
new FormValidate(signupForm,signupSubmit,signupInputs,true);