$(document).ready(() => {
    let categoryFinder = $(".categoryFinder");
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
    $(".subMenuFinder").click((e) => {
        let ulitem = $(".subMenuFinder").parent('a').next().slideToggle()
    })
})