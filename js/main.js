let images = document.querySelectorAll("img");
let buttons = document.querySelectorAll("button");

buttons.forEach(
    (button) => {
        button.classList.add("ripple");
    }

)


images.forEach(
    (image) => {
        image.loading = "lazy";
    }
)

let coles = document.querySelectorAll(".col-xxl-3 ");

coles.forEach(
    (cole) => {
        cole.classList.add("mb-3")
    }
)

$('.number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });

});

$(".cards").slick({
    slidesToShow: 3,
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    centerMode: true,
    // variableWidth: true,
    nextArrow: `<i class="fa-solid fa-arrow-right ripple next"></i>`,
    prevArrow: '<i class="fa-solid fa-arrow-left ripple prev"></i>'
})

