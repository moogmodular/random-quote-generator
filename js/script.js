/**
 * Created by MKS on 22.09.2015.
 */
$(document).ready(function () {

    $("#footer_load").load("footer.html");

    $('#gen_btn').click(function () {

        generate();

    });

    function generate() {
        var rand = Math.floor((Math.random() * 60));


        $.getJSON( "data/quotes.json", function( data ) {
            /*console.log(data[rand].author);*/

            $('#quote_id').html(data[rand].quote_id);
            $('#quote_data').html(data[rand].quote);
            $('#author').html(data[rand].author);

        });
    }

    generate();

});