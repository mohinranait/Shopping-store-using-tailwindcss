$(document).ready(() => {
    $(".categoryFinder").click((e) => {
        $(".leftMenuWrap").toggleClass(["left-0"])
        $(".leftMenuWrap").toggleClass("-left-[250px]")
        $(".main").toggleClass("pl-[250px]")
    })
    $(".closeLeftMenu").click((e) => {
        $(".leftMenuWrap").addClass("-left-[250px]")
        $(".leftMenuWrap").removeClass("left-0")
        $(".main").removeClass("pl-[250px]")
    })

    // Submenu open close
    $(".subMenuFinder").click( function() {
        $(this).parents('a').next().slideToggle();
    })
})