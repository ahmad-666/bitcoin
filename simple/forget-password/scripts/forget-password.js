//import util from '../../utilities/scripts/form.js' ;
document.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new LabelHandler(labelHandler) ;
})
let forgetPassForm = document.querySelector('form#forgetPassword') ;
let forgetPassSubmit = forgetPassForm.querySelector('button[type="submit"].final') ;
let forgetPassInputs = forgetPassForm.querySelectorAll('.validate') ;
new FormValidate(forgetPassForm,forgetPassSubmit,forgetPassInputs,true);