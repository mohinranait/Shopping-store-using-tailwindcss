$(document).ready(() => {
    $(".categoryFinder").click((e) => {
        $(".leftMenuWrap").toggleClass(["left-0"])
        $(".leftMenuWrap").toggleClass("-left-[300px]")
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
        $(".leftMenuWrap").addClass("-left-[300px]")
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

    // Product quentity increment and decrement 
    let decrementProduct = $("#decrementProduct");
    let incrementProduct = $("#incrementProduct");
    let productValue = $("#productValue");
    let productPrice = Number($(".prodPrice").text());
    $(".totalPrice").text(productPrice) 
    incrementProduct.click((e)=>{
        productValue.val( Number(productValue.val()) + 1);
        let total = (productPrice * Number(productValue.val()));
        $(".totalPrice").text(total) 
    })
    decrementProduct.click((e)=>{
        let productQty = Number(productValue.val());
        if(productQty > 1){
            productValue.val( productQty - 1);
            let total = (productPrice * (productQty - 1));
            $(".totalPrice").text(total)
        }else{
            alert('Minimum purchase at least one quantity');
            productValue.val(1);
        }
    })

    // Product size jquery code added
    let size = $(".sizeFinder");
    size.click((e) => {
        let parentDiv = $(e.target).parent('.sizeWrap').parent('div').find('label');
        let selectLabel = $(e.target).parent('.sizeWrap').find('label');
        parentDiv.removeClass(["bg-primary-color","border-primary-color","text-white"]);
        selectLabel.addClass(["bg-primary-color","border-primary-color","text-white"])
    })


    // Product cart increment and decrement jquery 
    $(".incrementCart").on('click',(e)=>{
        let cartValue = $(e.target).parents('span').find('.qtyValue');
        cartValue.val(Number(cartValue.val()) + 1);        
    })
    // Product cart increment and decrement jquery 
    $(".decrementCart").on('click',(e)=>{
        let cartValue = $(e.target).parents('span').find('.qtyValue');
        if(Number(cartValue.val()) > 1 ){
            cartValue.val(Number(cartValue.val()) - 1);        
        }else{
            alert('Minimum purchase at least one quantity');
            productValue.val(1);
        }
    })


})

