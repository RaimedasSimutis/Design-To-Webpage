//styles
import './assets/styles/reset.scss';
import './assets/styles/variables.scss';
import './assets/styles/style.scss';
import './assets/styles/media-breakpoints.scss';
import './assets/styles/animations.scss';
import './assets/styles/chart.scss';


//images
import './assets/images/logo.svg';
import './assets/images/crayon.svg';
import './assets/images/flag.png';
import './assets/images/rocket.svg';
import './assets/images/gears.png';
import './assets/images/laptop1.png';
import './assets/images/laptop2.png';
import './assets/images/laptop3.png';
import './assets/images/laptop4.png';
import './assets/images/facebook.png';
import './assets/images/twitter.png';
import './assets/images/linkedin.png';
import './assets/images/mail.png';
import './assets/images/behance.png';
import './assets/images/dribbble.png';
import './assets/images/github.png';
import './assets/images/googleplus.png';
import './assets/images/anne-hathaway.png';
import './assets/images/kate-upton.png';
import './assets/images/olivia-wilde.png';
import './assets/images/ashley-greene.png';
import './assets/images/chart1.png';
import './assets/images/chart2.png';
import './assets/images/chart3.png';
import './assets/images/chart4.png';



//menu bars animation and popup
$('[data-toggle]').on("click", function (e) {
    e.preventDefault();
    let element = $(this).data('toggle');

    $('[data-' + element + ']').toggleClass(element + '--active');

    if ($(this).hasClass(element + '--active')) {
        $(this).removeClass(element + '--active').addClass(element + '--unactive');
        $("body").css({
            "overflow": "visible"
        });

    } else if ($(this).hasClass(element + '--unactive')) {
        $(this).removeClass(element + '--unactive').addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });

    } else {
        $(this).addClass(element + '--active');
        $("body").css({
            "overflow": "hidden"
        });
    }
});

//Scroll to specific element possition functionality
function scrollToCord(y) {
    window.scrollTo({
        top: y,
        left: 0,
        behavior: 'smooth'
    });
}

//checking if popup is open or not
$('[data-scroll]').on("click", function (e) {
    e.preventDefault();
    let element = $(this).data('scroll');
    var offset = $('#'+ element).offset();
    
    if ($('.nav__menu-bars-popup').hasClass('nav__menu-bars-popup--active')) {
        $('.nav__menu-bars-popup').removeClass('nav__menu-bars-popup--active');
        $('.nav__menu-bars-container').removeClass('nav__menu-bars-popup--active').addClass('nav__menu-bars-popup--unactive');
        $("body").css({
            "overflow": "visible"
        });
        //console.log('klase buvo. istryniau');
    } 
    
    scrollToCord(offset.top);
})












