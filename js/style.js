$(".nav-item").on("click", function (e) {
    $("li.nav-item").removeClass("active");
    $(this).addClass("active");
});


$('.carousel').carousel({
    interval: 1000;
})
