;
(function () {

    'use strict';

    var mobileMenuOutsideClick = function () {

        $(document).click(function (e) {
            var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {

                if ($('body').hasClass('offcanvas')) {

                    $('body').removeClass('offcanvas');
                    $('.js-fh5co-nav-toggle').removeClass('active');

                }


            }
        });

    };


    var offcanvasMenu = function () {

        $('#page').prepend('<div id="fh5co-offcanvas" />');
        $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
        var clone1 = $('.menu-1 > ul').clone();
        $('#fh5co-offcanvas').append(clone1);
        var clone2 = $('.menu-2 > ul').clone();
        $('#fh5co-offcanvas').append(clone2);

        $('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
        $('#fh5co-offcanvas')
            .find('li')
            .removeClass('has-dropdown');

        // Hover dropdown menu on mobile
        $('.offcanvas-has-dropdown').mouseenter(function () {
            var $this = $(this);

            $this
                .addClass('active')
                .find('ul')
                .slideDown(500, 'easeOutExpo');
        }).mouseleave(function () {

            var $this = $(this);
            $this
                .removeClass('active')
                .find('ul')
                .slideUp(500, 'easeOutExpo');
        });


        $(window).resize(function () {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-fh5co-nav-toggle').removeClass('active');

            }
        });
    };


    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            var $this = $(this);


            if ($('body').hasClass('overflow offcanvas')) {
                $('body').removeClass('overflow offcanvas');
            } else {
                $('body').addClass('overflow offcanvas');
            }
            $this.toggleClass('active');
            event.preventDefault();

        });
    };



    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, { offset: '85%' });
    };


    var dropdown = function () {

        $('.has-dropdown').mouseenter(function () {

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function () {
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var tabs = function () {

        // Auto adjust height
        $('.fh5co-tab-content-wrap').css('height', 0);
        var autoHeight = function () {

            setTimeout(function () {

                var tabContentWrap = $('.fh5co-tab-content-wrap'),
                    tabHeight = $('.fh5co-tab-nav').outerHeight(),
                    formActiveHeight = $('.tab-content.active').outerHeight(),
                    totalHeight = parseInt(tabHeight + formActiveHeight + 90);

                tabContentWrap.css('height', totalHeight);

                $(window).resize(function () {
                    var tabContentWrap = $('.fh5co-tab-content-wrap'),
                        tabHeight = $('.fh5co-tab-nav').outerHeight(),
                        formActiveHeight = $('.tab-content.active').outerHeight(),
                        totalHeight = parseInt(tabHeight + formActiveHeight + 90);

                    tabContentWrap.css('height', totalHeight);
                });

            }, 100);

        };

        autoHeight();


        // Click tab menu
        $('.fh5co-tab-nav a').on('click', function (event) {

            var $this = $(this),
                tab = $this.data('tab');

            $('.tab-content')
                .addClass('animated-fast fadeOutDown');

            $('.fh5co-tab-nav li').removeClass('active');

            $this
                .closest('li')
                .addClass('active')

            $this
                .closest('.fh5co-tabs')
                .find('.tab-content[data-tab-content="' + tab + '"]')
                .removeClass('animated-fast fadeOutDown')
                .addClass('animated-fast active fadeIn');


            autoHeight();
            event.preventDefault();

        });
    };

    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    // Loading page
    var loaderPage = function () {
        $(".fh5co-loader").fadeOut("slow");
    };

    var counter = function () {
        $('.js-counter').countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };

    var counterWayPoint = function () {
        if ($('#fh5co-counter').length > 0) {
            $('#fh5co-counter').waypoint(function (direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, { offset: '90%' });
        }
    };

    var sliderMain = function () {

        $('#fh5co-hero .flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function () {
                setTimeout(function () {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }

        });

        $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function () {
            $('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
        });

    };

    var testimonialCarousel = function () {

        var owl = $('.owl-carousel-fullwidth');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            smartSpeed: 800,
            autoHeight: true
        });

    };


    $(function () {
        mobileMenuOutsideClick();
        offcanvasMenu();
        burgerMenu();
        contentWayPoint();
        dropdown();
        tabs();
        goToTop();
        loaderPage();
        counterWayPoint();
        sliderMain();
        testimonialCarousel();
    });


}());
var searchButton = document.getElementById('submit'),
    searchText = document.getElementById('search');




var items = [
    { text: 'aluminium chloride', id: '1' },
    { text: 'Aluminium Chloride', id: '1' },
    { text: 'aluminium fluoride', id: '1' },
    { text: 'Aluminium Fluoride', id: '1' },
    { text: 'aluminium sulphate', id: '1' },
    { text: 'Aluminium Sulphate', id: '1' },
    { text: 'ammonium bifluoride', id: '2' },
    { text: 'Ammonium Bifluoride', id: '2' },
    { text: 'ammonium carbonate', id: '2' },
    { text: 'Ammonium Carbonate', id: '2' },
    { text: 'ammonium chloride', id: '2' },
    { text: 'Ammonium Chloride', id: '2' },
    { text: 'ammonium fluoride', id: '3' },
    { text: 'Ammonium Fluoride', id: '3' },
    { text: 'ammonium persulphate', id: '3' },
    { text: 'Ammonium Persulphate', id: '3' },
    { text: 'ammonium polyphosphate', id: '3' },
    { text: 'Ammonium Polyphosphate', id: '3' },
    { text: 'ammonium sulphate', id: '4' },
    { text: 'Ammonium Sulphate', id: '4' },
    { text: 'ascorbic acid', id: '4' },
    { text: 'Ascorbic Acid', id: '4' },
    { text: 'barium carbonate', id: '4' },
    { text: 'Barium Carbonate', id: '4' },
    { text: 'barium chloride', id: '5' },
    { text: 'Barium Chloride', id: '5' },
    { text: 'barium hydroxide', id: '5' },
    { text: 'Barium Hydroxide', id: '5' },
    { text: 'barium sulphate', id: '5' },
    { text: 'Barium Sulphate', id: '5' },
    { text: 'basic chromium Sulphate', id: '6' },
    { text: 'Basic Chromium Sulphate', id: '6' },
    { text: 'benzoic acid', id: '6' },
    { text: 'Benzoic Acid', id: '6' },
    { text: 'benzyl benzoate', id: '6' },
    { text: 'Benzyl Benzoate', id: '6' },
    { text: 'bleaching powder', id: '7' },
    { text: 'Bleaching Powder', id: '7' },
    { text: 'borax', id: '7' },
    { text: 'Borax', id: '7' },
    { text: 'boric acid', id: '7' },
    { text: 'Boric Acid', id: '7' },
    { text: 'butyl acrylate', id: '8' },
    { text: 'Butyl Acrylate', id: '8' },
    { text: 'butylated hydroxy anisole', id: '8' },
    { text: 'Butylated Hydroxy Anisole', id: '8' },
    { text: 'calcium carbonate', id: '8' },
    { text: 'Calcium Carbonate', id: '8' },
    { text: 'calcium chloride', id: '9' },
    { text: 'Calcium Chloride', id: '9' },
    { text: 'calcium fluoride', id: '9' },
    { text: 'Calcium Fluoride', id: '9' },
    { text: 'calcium gluconate', id: '9' },
    { text: 'Calcium Gluconate', id: '9' },
    { text: 'calcium hydroxide', id: '10' },
    { text: 'Calcium Hydroxide', id: '10' },
    { text: 'calcium hypochlorite', id: '10' },
    { text: 'Calcium Hypochlorite', id: '10' },
    { text: 'calcium nitrate', id: '10' },
    { text: 'Calcium Nitrate', id: '10' },
    { text: 'calcium oxide', id: '11' },
    { text: 'Calcium Oxide', id: '11' },
    { text: 'calcium propionate', id: '11' },
    { text: 'Calcium Propionate', id: '11' },
    { text: 'calcium stearate', id: '11' },
    { text: 'Calcium Stearate', id: '11' },
    { text: 'calcium sulphate', id: '12' },
    { text: 'Calcium Sulphate', id: '12' },
    { text: 'caustic soda', id: '12' },
    { text: 'Caustic Soda', id: '12' },
    { text: 'chloroacetyl chloride', id: '12' },
    { text: 'Chloroacetyl Chloride', id: '12' },
    { text: 'chromic acid', id: '13' },
    { text: 'Chromic Acid', id: '13' },
    { text: 'chromium oxide', id: '13' },
    { text: 'Chromium Oxide', id: '13' },
    { text: 'chromium sulphate', id: '13' },
    { text: 'Chromium Sulphate', id: '13' },
    { text: 'citric acid', id: '14' },
    { text: 'Citric Acid', id: '14' },
    { text: 'cobalt chloride  ', id: '14' },
    { text: 'Cobalt Chloride  ', id: '14' },
    { text: 'cobalt sulphate  ', id: '14' },
    { text: 'Cobalt Sulphate  ', id: '14' },
    { text: 'copper carbonate', id: '15' },
    { text: 'Copper Carbonate  ', id: '15' },
    { text: 'copper nitrate  ', id: '15' },
    { text: 'Copper Nitrate  ', id: '15' },
    { text: 'copper oxide  ', id: '15' },
    { text: 'Copper Oxide  ', id: '15' },
    { text: 'copper sulphate  ', id: '16' },
    { text: 'Copper Sulphate  ', id: '16' },
    { text: 'cryolite', id: '16' },
    { text: 'Cryolite', id: '16' },
    { text: 'cuprous chloride  ', id: '16' },
    { text: 'Cuprous Chloride  ', id: '16' },
    { text: 'cyclohexanone  ', id: '17' },
    { text: 'Cyclohexanone  ', id: '17' },
    { text: 'denatonium benzoate  ', id: '17' },
    { text: 'Denatonium Benzoate  ', id: '17' },
    { text: 'diammonium phosphate  ', id: '17' },
    { text: 'Diammonium Phosphate  ', id: '17' },
    { text: 'dicalcium phosphate  ', id: '18' },
    { text: 'Dicalcium Phosphate  ', id: '18' },
    { text: 'diethylene glycol   ', id: '18' },
    { text: 'Diethylene glycol   ', id: '18' },
    { text: 'dioctyl phthalate  ', id: '18' },
    { text: 'Dioctyl Phthalate  ', id: '18' },
    { text: 'di potassium hydrogen phosphate  ', id: '19' },
    { text: 'Di potassium Hydrogen Phosphate  ', id: '19' },
    { text: 'di potassium phosphate ', id: '19' },
    { text: 'Di potassium Phosphate ', id: '19' },
    { text: 'di propylene glycol   ', id: '19' },
    { text: 'Di propylene Glycol   ', id: '19' },
    { text: 'disodium hydrogen phosphate   ', id: '20' },
    { text: 'Disodium Hydrogen Phosphate   ', id: '20' },
    { text: 'disodium phosphate   ', id: '20' },
    { text: 'Disodium Phosphate   ', id: '20' },
    { text: 'EDTA  ', id: '20' },
    { text: 'edta  ', id: '20' },
    { text: 'EDTA Acid  ', id: '21' },
    { text: 'edta acid  ', id: '21' },
    { text: 'EDTA Calcium  ', id: '21' },
    { text: 'edta calcium ', id: '21' },
    { text: 'EDTA Copper ', id: '21' },
    { text: 'edta copper ', id: '21' },
    { text: 'EDTA Di Sodium ', id: '22' },
    { text: 'edta di sodium ', id: '22' },
    { text: 'EDTA Dipotassium ', id: '22' },
    { text: 'edta dipotassium ', id: '22' },
    { text: 'EDTA Ferric ', id: '22' },
    { text: 'edta ferric ', id: '22' },
    { text: 'EDTA Tetrasodium ', id: '23' },
    { text: 'edta tetrasodium ', id: '23' },
    { text: 'EDTA Zinc ', id: '23' },
    { text: 'edta zinc ', id: '23' },
    { text: 'Ethyl Acetate', id: '23' },
    { text: 'ethyl acetate', id: '23' },
    { text: 'ethylene glycol', id: '24' },
    { text: 'Ethylene glycol', id: '24' },
    { text: 'ethylenediamine', id: '24' },
    { text: 'Ethylenediamine', id: '24' },
    { text: 'ferric ammonium citrate', id: '24' },
    { text: 'Ferric Ammonium Citrate', id: '24' },
    { text: 'ferric ferric chloride', id: '25' },
    { text: 'Ferric Ferric Chloride', id: '25' },
    { text: 'ferric ferric sulphate', id: '25' },
    { text: 'Ferric Ferric Sulphate', id: '25' },
    { text: 'ferro boron', id: '25' },
    { text: 'Ferro Boron', id: '25' },
    { text: 'ferro manganese', id: '26' },
    { text: 'Ferro Manganese', id: '26' },
    { text: 'ferro titanium', id: '26' },
    { text: 'Ferro Titanium', id: '26' },
    { text: 'ferrous ascorbate', id: '26' },
    { text: 'Ferrous Ascorbate', id: '26' },
    { text: 'ferrous chloride', id: '27' },
    { text: 'Ferrous Chloride', id: '27' },
    { text: 'ferrous fumarate', id: '27' },
    { text: 'Ferrous Fumarate', id: '27' },
    { text: 'ferrous sulphate', id: '27' },
    { text: 'Ferrous Sulphate', id: '27' },
    { text: 'flourspar powder', id: '28' },
    { text: 'Flourspar Powder', id: '28' },
    { text: 'fluoboric acid', id: '28' },
    { text: 'Fluoboric Acid', id: '28' },
    { text: 'folic acid', id: '28' },
    { text: 'Folic Acid', id: '28' },
    { text: 'formic acid', id: '29' },
    { text: 'Formic Acid', id: '29' },
    { text: 'fumaric acid', id: '29' },
    { text: 'Fumaric Acid', id: '29' },
    { text: 'glycerin', id: '29' },
    { text: 'Glycerin', id: '29' },
    { text: 'hydrated lime ', id: '30' },
    { text: 'Hydrated Lime ', id: '30' },
    { text: 'hydrobromic acid', id: '30' },
    { text: 'Hydrobromic Acid', id: '30' },
    { text: 'hydrogen peroxide', id: '30' },
    { text: 'Hydrogen Peroxide', id: '30' },
    { text: 'hydroquinone', id: '31' },
    { text: 'Hydroquinone', id: '31' },
    { text: 'iodine balls', id: '31' },
    { text: 'Iodine Balls', id: '31' },
    { text: 'isopropyl alcohol', id: '31' },
    { text: 'Isopropyl Alcohol', id: '31' },
    { text: 'isopropyl palmitate', id: '32' },
    { text: 'Isopropyl Palmitate', id: '32' },
    { text: 'l-Ascorbic acid', id: '32' },
    { text: 'L-Ascorbic Acid', id: '32' },
    { text: 'lactic acid', id: '32' },
    { text: 'Lactic Acid', id: '32' },
    { text: 'lead fluoborate ', id: '33' },
    { text: 'Lead Fluoborate ', id: '33' },
    { text: 'lead nitrate', id: '33' },
    { text: 'Lead Nitrate', id: '33' },
    { text: 'lead oxide', id: '33' },
    { text: 'Lead Oxide', id: '33' },
    { text: 'lithargeLead monoxide', id: '34' },
    { text: 'LithargeLead Monoxide', id: '34' },
    { text: 'lithium acetate', id: '34' },
    { text: 'Lithium Acetate', id: '34' },
    { text: 'lithium bromide', id: '34' },
    { text: 'Lithium Bromide', id: '34' },
    { text: 'Llithium carbonate', id: '35' },
    { text: 'lithium Chloride', id: '35' },
    { text: 'Lithium Chloride', id: '35' },
    { text: 'lithium hydroxide', id: '35' },
    { text: 'Lithium Hydroxide', id: '35' },
    { text: 'lithium stearate', id: '36' },
    { text: 'Lithium Stearate', id: '36' },
    { text: 'lithium tetraborate', id: '36' },
    { text: 'Lithium Tetraborate', id: '36' },
    { text: 'magnesium bromide', id: '36' },
    { text: 'Magnesium Bromide', id: '36' },
    { text: 'magnesium carbonate', id: '37' },
    { text: 'Magnesium Carbonate', id: '37' },
    { text: 'magnesium chloride', id: '37' },
    { text: 'Magnesium Chloride', id: '37' },
    { text: 'magnesium fluoride', id: '37' },
    { text: 'Magnesium Fluoride', id: '37' },
    { text: 'magnesium hydroxide ', id: '38' },
    { text: 'Magnesium Hydroxide ', id: '38' },
    { text: 'magnesium nitrate ', id: '38' },
    { text: 'Magnesium Nitrate ', id: '38' },
    { text: 'magnesium oxide', id: '38' },
    { text: 'Magnesium Oxide', id: '38' },
    { text: 'magnesium phosphate', id: '39' },
    { text: 'Magnesium Phosphate', id: '39' },
    { text: 'magnesium stearate', id: '39' },
    { text: 'Magnesium Stearate', id: '39' },
    { text: 'magnesium sulphate', id: '39' },
    { text: 'Magnesium Sulphate', id: '39' },
    { text: 'manganese carbonate', id: '40' },
    { text: 'Manganese Carbonate', id: '40' },
    { text: 'manganese oxide', id: '40' },
    { text: 'Manganese Oxide', id: '40' },
    { text: 'manganese sulphate', id: '40' },
    { text: 'Manganese Sulphate', id: '40' },
    { text: 'methyl bromide', id: '41' },
    { text: 'Methyl Bromide', id: '41' },
    { text: 'methyl chloride', id: '41' },
    { text: 'Methyl Chloride', id: '41' },
    { text: 'magnesium chloride', id: '41' },
    { text: 'Magnesium Chloride', id: '41' },
    { text: 'methyl paraben', id: '42' },
    { text: 'Methyl Paraben', id: '42' },
    { text: 'molybdenum disulphide', id: '42' },
    { text: 'Molybdenum Disulphide', id: '42' },
    { text: 'monoammonium phosphate', id: '42' },
    { text: 'Monoammonium Phosphate', id: '42' },
    { text: 'monocalcium phosphate', id: '43' },
    { text: 'Monocalcium Phosphate', id: '43' },
    { text: ' monoethylene glycol ', id: '43' },
    { text: ' Monoethylene Glycol ', id: '43' },
    { text: 'monopotassium phosphate', id: '43' },
    { text: 'Monopotassium Phosphate', id: '43' },
    { text: 'monosodium Phosphate', id: '44' },
    { text: 'Monosodium Phosphate', id: '44' },
    { text: 'n-bromosuccinimide', id: '44' },
    { text: 'N-Bromosuccinimide', id: '44' },
    { text: 'n-butyl chloride', id: '44' },
    { text: 'N-Butyl Chloride', id: '44' },
    { text: 'n-chlorosuccinimide', id: '45' },
    { text: 'N-Chlorosuccinimide', id: '45' },
    { text: 'nickel sulphate', id: '45' },
    { text: 'Nickel Sulphate', id: '45' },
    { text: 'nitric acid', id: '45' },
    { text: 'Nitric Acid', id: '45' },
    { text: 'oleic acid', id: '46' },
    { text: 'Oleic Acid', id: '46' },
    { text: 'oxalic acid', id: '46' },
    { text: 'Oxalic Acid', id: '46' },
    { text: 'p-Toluenesulphonic acid', id: '46' },
    { text: 'P-Toluenesulphonic Acid', id: '46' },
    { text: 'para Tertiary Butyl Catechol', id: '47' },
    { text: 'Para Tertiary Butyl Catechol', id: '47' },
    { text: 'para Toloune Sulphonic acid', id: '47' },
    { text: 'Para Toloune Sulphonic Acid', id: '47' },
    { text: 'peracetic acid', id: '47' },
    { text: 'Peracetic Acid', id: '47' },
    { text: 'phosphoric acid', id: '48' },
    { text: 'Phosphoric Acid', id: '48' },
    { text: 'poly aluminium chloride', id: '48' },
    { text: 'Poly Aluminium Chloride', id: '48' },
    { text: 'potassium bicarbonate', id: '48' },
    { text: 'Potassium Bicarbonate', id: '48' },
    { text: 'potassium bisulfate', id: '49' },
    { text: 'Potassium Bisulfate', id: '49' },
    { text: 'potassium bromate', id: '49' },
    { text: 'Potassium Bromate', id: '49' },
    { text: 'potassium carbonate', id: '49' },
    { text: 'Potassium Carbonate', id: '49' },
    { text: 'picric acid', id: '50' },
    { text: 'Picric Acid', id: '50' },
    { text: 'potassium citrate', id: '50' },
    { text: 'Potassium Citrate', id: '50' },
    { text: 'potassium dichromate', id: '50' },
    { text: 'Potassium Dichromate', id: '50' },
    { text: 'potassium Fluoborate', id: '51' },
    { text: 'Potassium Fluoborate', id: '51' },
    { text: 'potassium Fluoride', id: '51' },
    { text: 'Potassium Fluoride', id: '51' },
    { text: 'potassium Humate', id: '51' },
    { text: 'Potassium Humate', id: '51' },
    { text: 'potassium hydroxide', id: '52' },
    { text: 'Potassium Hydroxide', id: '52' },
    { text: 'potassium iodate', id: '52' },
    { text: 'Potassium Iodate', id: '52' },
    { text: 'potassium iodide', id: '52' },
    { text: 'Potassium Iodide', id: '52' },
    { text: 'potassium nitrate', id: '53' },
    { text: 'Potassium Nitrate', id: '53' },
    { text: 'potassium permanganate', id: '53' },
    { text: 'Potassium Permanganate', id: '53' },
    { text: 'potassium persulphate', id: '53' },
    { text: 'Potassium Persulphate', id: '53' },
    { text: 'potassium silico fluoride', id: '54' },
    { text: 'Potassium Silico fluoride', id: '54' },
    { text: 'potassium sulphate', id: '54' },
    { text: 'Potassium Sulphate', id: '54' },
    { text: 'potassium tetraborate', id: '54' },
    { text: 'Potassium Tetraborate', id: '54' },
    { text: 'propylene glycol', id: '55' },
    { text: 'Propylene Glycol', id: '55' },
    { text: 'salicylic acid', id: '55' },
    { text: 'Salicylic Acid', id: '55' },
    { text: 'silica gel', id: '55' },
    { text: 'Silica Gel', id: '55' },
    { text: 'silicon dioxide', id: '56' },
    { text: 'Silicon Dioxide', id: '56' },
    { text: 'sodium acetate', id: '56' },
    { text: 'Sodium Acetate', id: '56' },
    { text: 'soda ash', id: '56' },
    { text: 'Soda Ash', id: '56' },
    { text: 'sodium benzoate', id: '57' },
    { text: 'Sodium Benzoate', id: '57' },
    { text: 'sodium bicarbonate', id: '57' },
    { text: 'Sodium Bicarbonate', id: '57' },
    { text: 'sodium bisulphate', id: '57' },
    { text: 'Sodium Bisulphate', id: '57' },
    { text: 'sodium borohydride', id: '58' },
    { text: 'Sodium Borohydride', id: '58' },
    { text: 'sodium bromide', id: '58' },
    { text: 'Sodium Bromide', id: '58' },
    { text: 'sodium carbonate', id: '58' },
    { text: 'Sodium Carbonate', id: '58' },
    { text: 'sodium chloride', id: '59' },
    { text: 'Sodium Chloride', id: '59' },
    { text: 'sodium chlorite', id: '59' },
    { text: 'Sodium Chlorite', id: '59' },
    { text: 'sodium citrate', id: '59' },
    { text: 'Sodium Citrate', id: '59' },
    { text: 'sodium cryolite', id: '60' },
    { text: 'Sodium Cryolite', id: '60' },
    { text: 'sodium dichromate', id: '60' },
    { text: 'Sodium Dichromate', id: '60' },
    { text: 'sodium fluoride', id: '60' },
    { text: 'Sodium Fluoride', id: '60' },
    { text: 'sodium formate', id: '61' },
    { text: 'Sodium Formate', id: '61' },
    { text: 'sodium gluconate', id: '61' },
    { text: 'Sodium Gluconate', id: '61' },
    { text: 'sodium hexameta Phosphate', id: '61' },
    { text: 'Sodium Hexameta Phosphate', id: '61' },
    { text: 'sodium hydroxide', id: '62' },
    { text: 'Sodium Hydroxide', id: '62' },
    { text: 'sodium hypochloride', id: '62' },
    { text: 'Sodium Hypochloride', id: '62' },
    { text: 'sodium iodide', id: '62' },
    { text: 'Sodium Iodide', id: '62' },
    { text: 'sodium lauryl Sulphate', id: '63' },
    { text: 'Sodium Lauryl Sulphate', id: '63' },
    { text: 'sodium metabisulphate', id: '63' },
    { text: 'Sodium Metabisulphate', id: '63' },
    { text: 'sodium metasilicate', id: '63' },
    { text: 'Sodium Metasilicate', id: '63' },
    { text: 'sodium molybdate', id: '64' },
    { text: 'Sodium Molybdate', id: '64' },
    { text: 'sodium nitrate', id: '64' },
    { text: 'Sodium Nitrate', id: '64' },
    { text: 'sodium nitrite', id: '64' },
    { text: 'Sodium Nitrite', id: '64' },
    { text: 'sodium perborate', id: '65' },
    { text: 'Sodium Perborate', id: '65' },
    { text: 'sodium periodate', id: '65' },
    { text: 'Sodium Periodate', id: '65' },
    { text: 'sodium persulfate', id: '65' },
    { text: 'Sodium Persulfate', id: '65' },
    { text: 'sodium poly Acrylate', id: '66' },
    { text: 'Sodium Poly Acrylate', id: '66' },
    { text: 'sodium propionate', id: '66' },
    { text: 'Sodium Propionate', id: '66' },
    { text: 'sodium silicate', id: '66' },
    { text: 'Sodium Silicate', id: '66' },
    { text: 'sodium silico Fluoride', id: '67' },
    { text: 'Sodium Silico Fluoride', id: '67' },
    { text: 'sodium sulphate', id: '67' },
    { text: 'Sodium Sulphate', id: '67' },
    { text: 'sodium sulphide', id: '67' },
    { text: 'Sodium Sulphide', id: '67' },
    { text: ' sodium tripolyphosphate', id: '68' },
    { text: ' sodium Tripolyphosphate', id: '68' },
    { text: 'stannous chloride', id: '68' },
    { text: 'Stannous Chloride', id: '68' },
    { text: 'stannous fluoride', id: '68' },
    { text: 'Stannous Fluoride', id: '68' },
    { text: 'stearic acid', id: '69' },
    { text: 'Stearic Acid', id: '69' },
    { text: 'sulphamic acid', id: '69' },
    { text: 'Sulphamic Acid', id: '69' },
    { text: 'tertiary butyl benzene', id: '69' },
    { text: 'Tertiary Butyl Benzene', id: '69' },
    { text: 'tertiary butyl chloride', id: '70' },
    { text: 'Tertiary Butyl Chloride', id: '70' },
    { text: 'tertiary butyl hydroquinone', id: '70' },
    { text: 'Tertiary Butyl Hydroquinone', id: '70' },
    { text: 'tetrasodium pyrophosphate', id: '70' },
    { text: 'Tetrasodium Pyrophosphate', id: '70' },
    { text: 'tricalcium phosphate', id: '71' },
    { text: 'Tricalcium Phosphate', id: '71' },
    { text: 'trichloroethylene', id: '71' },
    { text: 'Trichloroethylene', id: '71' },
    { text: 'triethylene glycol', id: '71' },
    { text: 'Triethylene Glycol', id: '71' },
    { text: 'trisodium phosphate', id: '72' },
    { text: 'Trisodiuz Phosphate', id: '72' },
    { text: 'zinc ammonium chloride', id: '72' },
    { text: 'Zinc Ammonium Chloride', id: '72' },
    { text: 'zinc chloride', id: '72' },
    { text: 'Zinc Chloride', id: '72' },
    { text: 'zinc oxide', id: '73' },
    { text: 'Zinc Oxide', id: '73' },
    { text: 'zinc stearate', id: '73' },
    { text: 'Zinc Stearate', id: '73' },
    { text: 'zinc sulphate', id: '73' },
    { text: 'Zinc Sulphate', id: '73' },
    { text: 'copper napthanate', id: '74' },
    { text: 'Copper Napthanate', id: '74' },
    { text: 'LABSA', id: '74' },
    { text: 'labsa', id: '74' },
    { text: 'Potassium Magnesium Sulphate', id: '75' },
    { text: 'potassium magnesium sulphate', id: '75' },
    { text: 'Potassium Sulphate Powder', id: '75' },
    { text: 'potassium sulphate powder', id: '75' },
    { text: 'Potassium Nitrate Powder', id: '75' },
    { text: 'potassium nitrate powder', id: '75' },
    { text: 'White Ammonium Chloride', id: '76' },
    { text: 'white ammonium chloride', id: '76' },
    { text: 'Crystalline Potassium Chloride', id: '76' },
    { text: 'crystalline potassium chloride', id: '76' },
    { text: 'Magnesium Sulphate Anhydrous', id: '76' },
    { text: 'magnesium sulphate anhydrous', id: '76' },
    { text: 'Zinc Sulphate Monohydrate', id: '77' },
    { text: 'zinc sulphate monohydrate', id: '77' },
    { text: 'Potassium Schoenite Powder', id: '77' },
    { text: 'potassium schoenite powder', id: '77' },


];

function searchForItem(query) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].text.indexOf(query) !== -1) {
            return document.getElementById(items[i].id);
        }
    }
}

searchButton.addEventListener('click', function () {
    var query = searchText.value,
        item = searchForItem(query);
    if (typeof item !== 'undefined') {
        item.scrollIntoView();
    }
});