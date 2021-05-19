$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  AdaptiveHeight: true,
  autoplay: false,
  arrows: false,

});
$('.slider-nav').slick({
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  centerMode: true,
  focusOnSelect: true,
  AdaptiveHeight:true,
  

});

$('.variable-width').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  AdaptiveHeight:true,
  centerMode: true,
});



document.getElementsByClassName("tabcontent")[0].style.display = 'block'

function openCity(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}