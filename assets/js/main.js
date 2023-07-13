$(document).ready(() => {
    $(".categoryFinder").click((e) => {
        $(".leftMenuWrap").toggleClass(["left-0"])
        $(".leftMenuWrap").toggleClass("-left-[250px]")
        if(  window.innerWidth > 992 ){
            $(".main").toggleClass("ml-[250px]")
        }
    })
    $(".closeLeftMenu").click((e) => {
        $(".leftMenuWrap").addClass("-left-[250px]")
        $(".leftMenuWrap").removeClass("left-0")
        $(".main").removeClass("ml-[250px]")
    })

    // Submenu open close
    $(".subMenuFinder").click( function() {
        $(this).parents('a').next().slideToggle();
    })
})

