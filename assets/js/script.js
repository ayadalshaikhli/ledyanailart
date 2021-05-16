

$("#snapchat-hidden").hover(function () {
    $('#snapchat-code').toggleClass("hidden")
})


$("#whatsapp-hidden").hover(function () {
    $('#whatsapp-number').toggleClass("hidden")
} )

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})