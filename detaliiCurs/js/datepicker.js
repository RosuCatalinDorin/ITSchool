$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: new Date().toDateString(),
    })
});