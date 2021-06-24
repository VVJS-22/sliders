

const slides = ["b1","b2","b3"]

function show(button) {
    console.log(button.id);
    hidePrevious();
    const slide = document.querySelector(`.${button.id}`);
    const visible = slide.classList.remove("opacity");
    console.log(slide);
}

function hidePrevious() {
    slides.forEach(function(slide) {
        const allSlides = document.querySelector(`.${slide}`);
        allSlides.classList.add("opacity");
    
    })
}

