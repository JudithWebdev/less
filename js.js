$(window).on('load', function () {


    // masonry.pkgd.js added as external resource

    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
        columnWidth: 100,
        itemSelector: '.grid-item'
    });





    $('#nav3 .nav-item .nav-link').click(function (event) {
        msnry.layout();
        console.log($(this).attr("class"));
        $('#main').addClass('dark-background');
        $('#nav3 .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');




        if (!$('#navbarDropdown1').attr('class').includes("active")) {

            $('#collapse-articles').removeClass('show');
            $('#main').removeClass('dark-background');
            console.log('dropdownNOTactive');
        }

        if ($('#collapse-articles').attr('class').includes('show')) {
            $('#navbarDropdown1').removeClass('active');
            $('#main').removeClass('dark-background');
        }

    });

    $('#nav4 .nav-item').click(function (event) {


        var product = $(this).data('product');
        console.log(product);

        $('#product-details').children().hide();
        $('#nav4 .nav-item .nav-link').removeClass('active');
        $('#product-details #' + product).show();
        $('#nav4 .nav-item #' + product + "-link").addClass('active');


    });




});