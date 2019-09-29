import util from '../../utilities/scripts/form.js' ;
document.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new util.LabelHandler(labelHandler) ;
})
let forgetPassForm = document.querySelector('form#forgetPassword') ;
let forgetPassSubmit = forgetPassForm.querySelector('button[type="submit"].final') ;
let forgetPassInputs = forgetPassForm.querySelectorAll('.validate') ;
new util.FormValidate(forgetPassForm,forgetPassSubmit,forgetPassInputs,true);