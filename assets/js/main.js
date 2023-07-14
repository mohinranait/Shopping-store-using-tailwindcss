$(document).ready(() => {
    $(".categoryFinder").click((e) => {
        $(".leftMenuWrap").toggleClass(["left-0"])
        $(".leftMenuWrap").toggleClass("-left-[250px]")
        if(  window.innerWidth > 992 ){
            $(".main").toggleClass("boxLayout")
            $(".productTab").toggleClass("lg:col-span-9")
            // $(".productTab").toggleClass("lg:col-span-12")
            $(".productAside").toggleClass("lg:block")
            // $(".productAside").toggleClass("hidden")
            $(".productGallary").toggleClass("grid-cols-12")
            $(".productOffer").toggleClass("lg:col-span-3")
        }
    })
    $(".closeLeftMenu").click((e) => {
        $(".leftMenuWrap").addClass("-left-[250px]")
        $(".leftMenuWrap").removeClass("left-0")
        $(".main").removeClass("boxLayout")
        if( window.innerWidth > 992 ){
            $(".productTab").toggleClass("lg:col-span-9")
            $(".productAside").removeClass("hidden")
            $(".productGallary").addClass("grid-cols-12")
            $(".productOffer").addClass("lg:col-span-3")
        }
    })

    // Submenu open close
    $(".subMenuFinder").click( function() {
        $(this).parents('a').next().slideToggle();
    })
})

