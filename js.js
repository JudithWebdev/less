$(window).on('load', function () {



    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
        columnWidth: 100,
        itemSelector: '.grid-item',
    });

    $('#collapse-articles').hide();


    $('#navbarDropdownHouse').mouseenter(function () {
        $('#main').addClass('dark-background');

        $('#collapse-articles').show();

    });

    $('#collapse-articles').mouseleave(function (event) {

        $('#main').removeClass('dark-background');
        $('#collapse-articles').hide();
    });


    if ($('#collapse-articles').css('display') == "block") {
        msnry.layout();
    }

    $('#nav4 .nav-item').mouseenter(function () {


        var product = $(this).data('product');

        $('#product-details').children().hide();
        $('#nav4 .nav-item .nav-link').removeClass('active');
        $('#product-details #' + product).show();
        $('#nav4 .nav-item #' + product + "-link").addClass('active');

    });







});