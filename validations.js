function validateLength(input){

    var result = input.length;

    if(result < 2 || result > 22){
        return false
    }
    return true;
}

function validateChars(input){
    var result = input.match(/<.*>/g);

    if(result){
        console.log('invalid characters');

        return false
    }
    return true;
}

function validateNumbers(input){

    if(!Number(input)){
        console.log('is not a number');
        return false
    }
    return true;
}

function checkTextInputs(input){
    var errors = [];

    var currentText = input.val();


    var isValidLength = validateLength(currentText);
    var isThereSpecialChars = validateChars(currentText);
    if (!isValidLength) {
        input.css('border', '1px solid darkred');
        errors.push('invalid length');
    }
    if (!isThereSpecialChars) {
        input.css('border', '1px solid darkred');
        errors.push('invalid chars');
    }
    return errors;
} // vru6ta masiv ot gre6ki

function checkNumberInputs(number){
    var errors = [];
    var currentText = number.val();
    var isValidLength = validateLength(currentText);
    var isNumber = validateNumbers(currentText);
    if (!isValidLength) {

        number.css('border', '1px solid darkred');
        errors.push('invalid length');
    }
    if (!isNumber) {
        number.css('border', '1px solid darkred');
        errors.push('invalid number');
    }
    //console.log(priceErrors);
    return errors;
}


function displayCarTable(myCars){
    var tbody = $('tbody');
    $('input').css('border','1px solid #22bfee')
    for(var i = 0; i < myCars.length; i++){

        var deleteBtn = $('<button>');
        deleteBtn.addClass('deleteCar')
            .text('delete');

        var editBtn  = $('<button>');
        editBtn.addClass('editCar')
            .text('edit');



        var tr = $('<tr data-number = '+ (i+1) +'></tr>');
        tr
            .append($('<td>' + (i+1)      + '</td>'))
            .append($('<td>' + myCars[i].mark     + '</td>'))
            .append($('<td>' + myCars[i].model    + '</td>'))
            .append($('<td>' + myCars[i].year    + 'lv</td>'))
            .append($('<td>' + myCars[i].range    + 'km</td>'))
            .append(deleteBtn)
            .append(editBtn);

        tbody.append(tr);
    }

}