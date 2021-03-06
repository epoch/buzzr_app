$(document).ready(function () {
        // upon clicking the button with #addresses id, initialize the locale variable with the addresses value, run draw_points function;//
        $('#address').click(function () {
                console.log('address clickhandler');
                alert('Getting info from Instagram, this may take a few seconds......');
                var locale = $('#addresses').val();
                locale = locale.replace(/[\|&;\$%@"<>\(\)\+,\, ]/g, "%20");
                draw_points(locale);
                console.log('locale=' + locale);
                });
         $('#addresses').keydown(function(e) {
            if (e.which === 13) {
                e.preventDefault();
                $('#address').trigger('click');
            };
        });
         $('form.navbar-form').submit(function (e) {
            e.preventDefault();
         });
// HELP need to sort out return false
// HELP stray curly needs auditing
    var draw_points = function (locale) {
        console.log('drawpoints be drawing');
        $.ajax({
            url: '/points/' + locale
        }).done(function (results) {
            console.log(results);
            $('#loading, #images_listrender').empty();
            // iterates the add_marker function and parses the data from the json object to add_marker
            $.each(results.data, function (i, l) {
                add_marker(l.latitude, l.longitude, l.name, l.id);
                // makes all 4 elements available to listrender function;
                listrender(l);
            });
            // centers map using first object lat and long
            center_map(results.data[0].latitude, results.data[0].longitude);
            // instagram sometimes returns errors, this alert makes the user aware;
        }).error(function (results, t, m) {
                   if(t==="timeout") {
                    alert("got timeout");
                } else {
                    alert("sorry, Instagram had a hiccup. They call it a "+t+". Please try again.");
                }
        });
    };
// runs animate gif during ajax loading events
    $(document).ajaxStart(function(){
        $('#loading').html("<img src='/assets/bee.gif'>");
    });
});
// renders the marker info to image_list
var inforender = function (marker) {
    var id = marker.id; // Get the ID from marker
    console.log('The ID for this is really: ' + id);
    $.ajax({
        url: '/photo/' + id,
        datatype: 'json',
        type: 'GET'
    }).done(function (photo) {
        if (photo.data.length == 0) {
            alert('Sorry, this photo has been marked private by the owner, try another marker!')
            return;
        };
        $('#images_list_modal').modal('hide')
        $('.modal img').attr('src', photo.data[0].images.low_resolution.url);
        $('.modal-footer p').text(photo.data[0].caption.text);
        $('.modal-header h4').text(photo.data[0].location.name);
        $('#image_result').modal({
            keyboard: false
        });
    });
};
