jQuery(document).ready(function () {

    //jQuery(".owl-theme div:eq(2)").addClass("main-show");



    jQuery(".owl-carousel4").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,

                    loop: true
                }
            }
        }
    );

    jQuery(".owl-carousel5").owlCarousel(
        {
            loop: true,
            center: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 1,

                },
                1000: {
                    items: 1,

                    loop: true
                }
            }
        }
    );
});

function myFunction(x) {
    x.classList.toggle("change");
}






