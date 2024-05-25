const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

window.addEventListener('load', function () {
    setTimeout(removeLoader, 2000);
});

function removeLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
}


var tl = gsap.timeline()


tl.to("#main .scrollbar h1", {
    transform:"translateX(-100%)",
    fontWeight:"100",
    scrollTrigger: {
        trigger:".scrollbar",
        scroller:"body",
        markers:true,
        start:"top 0",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})
