$(function() {
    var submit = $('#submit');
    var allCars = $('#allCars');

    var myCars = [];

    submit.on('click', function (e) {
        e.preventDefault();


        var mark  = $('#mark') //.val();
        var model = $('#model')//.val();
        var year = $('#price')//.val();
        var range = $('#range')//.val();
        var editBtn = $('<button>');
        editBtn.addClass('editCar')
            .text('edit');
        var deleteBtn = $('<button>');
        deleteBtn.addClass('deleteCar')
            .text('delete');

        $('p').text('');   // premahva teksta ot vsi4ki <P>


        console.log(mark.val());
        var markErrors  = checkTextInputs(mark);
        var modelErrors = checkTextInputs(model);
        var yearErrors = checkNumberInputs(year);
        var rangeErrors = checkNumberInputs(range);


        if (markErrors.length || modelErrors.length || yearErrors.length || rangeErrors.length) {

            if (markErrors.length) {
                var text1 = '';

                text1 += markErrors[0] ? markErrors[0] : '';
                text1 += markErrors[1] ? ', ' + markErrors[1] : '';
                $($('p')[0]).html(text1);

            }
            if (modelErrors.length) {
                var text2 = '';

                text2 += modelErrors[0] ? modelErrors[0] : '';
                text2 += modelErrors[1] ? ', ' + modelErrors[1] : '';
                $($('p')[1]).html(text2);

            }
            if (yearErrors.length) {
                var text3 = '';

                text3 += yearErrors[0] ? yearErrors[0] : '';
                text3 += yearErrors[1] ? ', ' + yearErrors[1] : '';
                $($('p')[2]).html(text3);

            }
            if (rangeErrors.length) {
                var text4 = '';

                text4 += rangeErrors[0] ? rangeErrors[0] : '';
                text4 += rangeErrors[1] ? ', ' + rangeErrors[1] : '';
                $($('p')[3]).html(text4);

            }
            console.log('invalid input');
            return;
        }
        var tbody = $('tbody');
        tbody.html('');

        var car = new Car(mark.val(),model.val(),parseInt(range.val()),parseInt(year.val()));
        myCars.push(car);
        var carNumb = myCars.length;

        document.getElementsByTagName("form")[0].reset();


        displayCarTable(myCars);

    });

    allCars.on('click', function (e) {

        if ($(event.target).hasClass("deleteCar")) {
            var parent = $(event.target).parent();

            var removedElNum = parent.attr('data-number') - 1;


            var tbody = $('tbody');
            tbody.html('');

            myCars.splice(removedElNum,1);

            displayCarTable(myCars);
        }


        if($(event.target).hasClass("editCar")){
            var parent = $(event.target).parent();

            var editedElNum = parent.attr('data-number') - 1;

            var currentCar = myCars[editedElNum];

            console.log(currentCar);


            var mark  = $('#mark' ).val(currentCar.mark);
            var model = $('#model').val(currentCar.model);
            var year =  $('#price').val(currentCar.year);
            var range = $('#range').val(currentCar.range);

            myCars.splice(editedElNum,1);

        }
    })
});














//
//if(i == removedElNum){
//    continue;
//}
//
//arr.push(myCars[i]);
//count++;
//var btn = $('<button>');
//btn.addClass('deleteCar')
//    .text('delete');
//
//var tr = $('<tr data-number = '+ count +'></tr>');
//tr
//    .append($('<td>' + count      + '</td>'))
//    .append($('<td>' + myCars[i].model    + '</td>'))
//    .append($('<td>' + myCars[i].mark     + '</td>'))
//    .append($('<td>' + myCars[i].price    + 'lv</td>'))
//    .append($('<td>' + myCars[i].range    + 'km</td>'))
//    .append(btn);
//
//tbody.append(tr);









