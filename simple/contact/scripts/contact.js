//import form from '../../utilities/scripts/form.js' ;
let adminForm = document.querySelector('form#adminContact') ;
let adminSubmit = adminForm.querySelector('button[type="submit"]') ;
let adminInputs = adminForm.querySelectorAll('.validate') ;
adminForm.querySelectorAll('.labelHandler').forEach(labelHandler => {
    new LabelHandler(labelHandler) ;
})
new FormValidate(adminForm,adminSubmit,adminInputs,true) ;