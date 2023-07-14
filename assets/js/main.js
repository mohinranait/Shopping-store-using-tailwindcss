$(document).ready(() => {
    $(".categoryFinder").click((e) => {
        $(".leftMenuWrap").toggleClass(["left-0"])
        $(".leftMenuWrap").toggleClass("-left-[250px]")
        if(  window.innerWidth > 992 ){
            $(".main").toggleClass("boxLayout")
            // Product details page jquery code start
            $(".productTab").toggleClass("lg:col-span-9")
            $(".productAside").toggleClass("lg:block")
            $(".productGallary").toggleClass("grid-cols-12")
            $(".productOffer").toggleClass("lg:col-span-3")
            // Product details page jquery code end
        }
    })
    $(".closeLeftMenu").click((e) => {
        $(".leftMenuWrap").addClass("-left-[250px]")
        $(".leftMenuWrap").removeClass("left-0")
        $(".main").removeClass("boxLayout")
        if( window.innerWidth > 992 ){
            // Product details page jquery code start
            $(".productTab").toggleClass("lg:col-span-9")
            $(".productAside").removeClass("hidden")
            $(".productGallary").addClass("grid-cols-12")
            $(".productOffer").addClass("lg:col-span-3")
            // Product details page jquery code end
        }
    })

    // Submenu open close
    $(".subMenuFinder").click( function() {
        $(this).parents('a').next().slideToggle();
    })

    // Product Gallery image jquery code start
    $(".productGallaryImg").click((e) => {
        let mainImg = $("#productDisplayImg");
        mainImg.animate({
            opacity:0
        })
        setTimeout(() => {
            mainImg.attr('src', e.target.src);
            mainImg.animate({
                opacity:1
            })
        }, 400);
    })
})

