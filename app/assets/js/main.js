$(document).ready(function () {
    // MENU TOGLLE
    $(".menu-toggle").click(function(e){
        e.stopPropagation();
        $(".side-menu-wrapper").toggleClass("menu-toggle");
        $(".right-content-wrapper").toggleClass("right-content-toggle");
    });

    // USER Toggle HEADER
    $(".user").click(function(e){
        e.stopPropagation();
        $(".user-toggle").toggleClass("display");
    });

    //USER TOGGLE CLOSE ON CLICK ON BODY
    $(document).click(function(){
        $(".user-toggle").hasClass("display");
        $(".user-toggle").removeClass("display");
    });



     // DROP DOWNS TOGGLE
     $(".more-dropdowns").click(function(){
        $(".solution-dropdowns-wrapper").toggleClass("togglled");
        $(".more-dropdowns").toggleClass("togglled");
    });

    // SIDE MENU EXPAND ON CLICK COLLAPSED MENU ITEM
    $(".nav li").click(function(){
        $(".side-menu-wrapper").addClass("menu-toggle");
        $(".right-content-wrapper").addClass("right-content-toggle");
    });

    // SELECT2 REMOTE DATA
    $('.js-data').select2({
        width: '100%'
    });

    //DOCUMENT VIEW RIGHT SLIDE LEFT SLIDE ARROW IN ACTION
    $(".slide-right").click(function(){
        if ($(".report-list-checkboxes").hasClass("d-none-reportlist-checkboxes")) {
            $(".document-view-wrapper").toggleClass("col-md-10").toggleClass("col-md-12");

            $(".preview-thumbnail-wrapper").toggleClass("col-md-3").toggleClass("col-md-2");
            $(".main-doc-view-wrapper").toggleClass("col-md-9").toggleClass("col-md-10");

            $(".right-action-buttons-wrapper").toggleClass("d-none-right-btns");
        }else{
            $(".right-action-buttons-wrapper").toggleClass("d-none-right-btns");
            $(".document-view-wrapper").toggleClass("col-md-7").toggleClass("col-md-9");
        }

        $(".slide-right").toggleClass("slided-right");
    });

    $(".slide-left").click(function(){
        if ($(".right-action-buttons-wrapper").hasClass("d-none-right-btns")) {
            $(".document-view-wrapper").toggleClass("col-md-9").toggleClass("col-md-12");

            $(".preview-thumbnail-wrapper").toggleClass("col-md-3").toggleClass("col-md-2");
            $(".main-doc-view-wrapper").toggleClass("col-md-9").toggleClass("col-md-10");

            $(".report-list-checkboxes").toggleClass("d-none-reportlist-checkboxes");
        }else {
            $(".report-list-checkboxes").toggleClass("d-none-reportlist-checkboxes");
            $(".document-view-wrapper").toggleClass("col-md-7").toggleClass("col-md-10");
        }

        $(".slide-left").toggleClass("slided-left");
    });

    // $('.trigger').change(function () {
    //     // $("."+this.value).toggleClass('hide');
    //     console.log('clicked');
    // }); 

    // $(function () {
    //     $(".trigger").click(function () {
    //         if ($(this).each(":checked")) {
    //             $(".checkbox-action-wrapper").addClass("hiadd");
    //         } else {
    //             $(".checkbox-action-wrapper").removeClass("hiadd");
    //         }
    //     });
    // });

    //CHECK BOX CLICK CONTROLLERS
    // if($('.checkbox-block')){
    //     $('input[type="checkbox"]').click(function() {
    //         ($(this).is(":checked")) ? $(this).next('div').show() : $(this).next('div').hide();
    //     });
    // }

    //CHECK BOX CLICK CONTROLLERS
    // $(".checkbox-action-wrapper").hide();
    // $('input[type="checkbox"]').click(function() {
    //     $(this).next('.checkbox-action-wrapper').toggle(this.checked);
    // });

    //CHECK BOX CLICK CONTROLLERS VIEW In CHECKED
    $('input[type="checkbox"]').click(function() {
        if($(this).is(":checked")) {
            $(this).next(".checkbox-action-wrapper").show(1000);
        }else{
            $(this).next(".checkbox-action-wrapper").hide(1000);
        }
    });

    //CHECKED ALL CHECK BOXES AND SHOW ACTIONS
    $('#select-all').click(function(event) {   
        if(this.checked) {
            // Iterate each checkbox
            $(':checkbox').each(function() {
                this.checked = true;                        
            });
            $(".checkbox-action-wrapper").show(1000);
        } else {
            $(':checkbox').each(function() {
                this.checked = false;                       
            });
            $(".checkbox-action-wrapper").hide(1000);
        }
    });

    //PRINT FUNCTION
    $('.print').click(function () {
        window.print();
    })


    //DROPZONE Upload Documents
}); 










// BUTTONS RIPPLE EFFECT
"use strict";
// RIPPLES EFFECT
function ripplesEffect(e) {
    var waves, d, x, y;
    
    if($(this).find('.waves').length === 0) {
        $(this).prepend('<span class="waves"></span>');
    }
     
    waves = $(this).find('.waves');
    waves.removeClass('ripple');
     
    if(!waves.height() && !waves.width()) {
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        waves.css({height: d, width: d});
    }
    
    x = e.pageX - $(this).offset().left - waves.width()/2;
    y = e.pageY - $(this).offset().top - waves.height()/2;
     
    waves.css({top: y+'px', left: x+'px'}).addClass('ripple');
};

$(document).ready(function(){
    $('.btn, .ripples').on('click', ripplesEffect);
});



//PERFECT SCROLL BAR SCRIPTS

//PERFECT SCROLL BAR IN LANDING PAGE SOLUTIONS
if(document.getElementById('landing-scroll')){
    const lps = new PerfectScrollbar('#landing-scroll', {
        wheelSpeed: .3,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true,
    });
    lps.update();
}

//PERFECT SCROLL BAR for SOLUTIONS ITEMS
if(document.getElementById('solution-scroll')){
    const ps = new PerfectScrollbar('#solution-scroll', {
        wheelSpeed: .3,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true,
    });
    ps.update();
}

//PERFECT SCROLL BAR for REPORT LIST CHECKBOXES
if(document.querySelector('.report-list-checkboxes')){
    const ps = new PerfectScrollbar('.report-list-checkboxes', {
        wheelSpeed: .3,
        wheelPropagation: true,
        minScrollbarLength: 20,
        suppressScrollX: true,
    });
    ps.update();
}

//PERFECT SCROLL BAR for PREVIEW THUMNAIL WRAPPER
if(document.querySelector('.preview-thumbnail-wrapper')){
    const ps = new PerfectScrollbar('.preview-thumbnail-wrapper', {
        wheelSpeed: .5,
        wheelPropagation: true,
        minScrollbarLength: 5,
        suppressScrollX: true,
    });
    ps.update();
}