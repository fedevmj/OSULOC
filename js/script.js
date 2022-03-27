$(document).ready(function () {

    //위로가기
    let gotop = $('.gotop');

    gotop.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > 110) {
            gotop.addClass('gotop-active');
        }else{
            gotop.removeClass('gotop-active');
        }
    });

    //쿠폰 모달창 
    let coupon = $('.coupon');
    let coupon_close = $('.coupon-close');


    // 모달창 X 클릭하면 모달창 사라지면서 헤더 높이가 54px이었던 것이 0px로 올라감
    coupon_close.click(function () {
        coupon.hide();
        $('.header').css('top', 0);
        $('.visual').css('padding-top', 0);
    })

    //주메뉴 및 서브메뉴
    let gnb_li = $('.gnb>li');
    let gnb_li_a = $('.gnb>li>a')
    let submenu_wrap = $('.submenu-wrap');

    let gnb_timer;
    let gnb_delay = 100;

    //gnb_li에 마우스 올리면 서브메뉴 나타나기
    $.each(gnb_li, function (index, item) {
        $(this).mouseenter(function () {
            submenu_wrap.addClass('submenu-wrap-active');

            clearTimeout(gnb_timer);

            // 포커스유지
            gnb_li_a.removeClass('gnb-li-a-focus');
            gnb_li_a.eq(index).addClass('gnb-li-a-focus');
        })

            // gnb_li에서 벗어나면 서브메뉴 사라지기
        $(this).mouseleave(function(){
            clearTimeout(gnb_timer);
            gnb_timer = setTimeout(subwrapHide, gnb_delay);
            // submenu_wrap.removeClass('submenu-wrap-active');
        })

        function subwrapHide(){
            submenu_wrap.removeClass('submenu-wrap-active');
            gnb_li_a.removeClass('gnb-li-a-focus');
        }
    })

    submenu_wrap.mouseenter(function(){
        clearTimeout(gnb_timer);
        $(this).addClass('submenu-wrap-active');
    })

    // 다른 서브메뉴로 이동시 gnb-li-a-focus 이동시키기
    let submenu = $('.submenu');
    $.each(submenu, function (index, item) {
        $(this).mouseenter(function () {
            // clearTimeout(gnb_timer);
            gnb_li_a.removeClass('gnb-li-a-focus');
            gnb_li_a.eq(index).addClass('gnb-li-a-focus');
        })
    })

    submenu_wrap.mouseleave(function () {
        submenu_wrap.removeClass('submenu-wrap-active');
        submenu_sub.hide();
        //서브메뉴에서 마우스 사라지면 포커스 사라지기
        gnb_li_a.removeClass('gnb-li-a-focus');
    })

    // 각 서브 메뉴 링크에 마우스 올리면 서브 메뉴의 하단 메뉴 보여주기
    let submenu_li = $('.submenu > li');
    let submenu_sub = $('.submenu-sub');

    $.each(submenu_li, function (index, item) {
        $(this).mouseenter(function () {
            submenu_sub.hide();
            submenu_sub.eq(index).show();
        })

        $(this).mouseleave(function () {
            let temp = submenu_li.hasClass('sub-link');
            if(temp == true){
                return;
            }
            submenu_sub.hide();
        })
    })

    // 서브메뉴의 하단메뉴에서 마우스 내리면 사라지게 하기

    submenu_sub.mouseleave(function(){
        $(this).hide();
    })

    // 서브메뉴의 하단메뉴에 마우스 올렸을 때 해당하는 인덱스 번호의 하단메뉴 나오게 하기

    let submenu_container = $('.submenu-container');
    let submenu_timer;
    let timer_delay = 100;

    $.each(submenu_sub, function(index, item){
        $(this).mouseenter(function(){
            clearTimeout(submenu_timer);
            submenu_sub.eq(index).show();
        })
    })

    // submenu_container 영역 벗어나면 submenu_sub 닫히게 만들기
    submenu_container.mouseleave(function(){
        //주메뉴 포커스 사라지기
        gnb_li_a.removeClass('gnb-li-a-focus');
        // submenu_sub.hide();

        clearTimeout(submenu_timer);
        submenu_timer = setTimeout(submenuHide, timer_delay);
        submenu_sub.hide();
    })

    function submenuHide(){
        submenu_sub.hide();
    }

    //헬프메뉴: 더보기
    let help_menu_more = $('.help-menu-more');
    let help_more_list = $('.help-more-list');
    let help_timer;
    let help_delay = 100;

    help_menu_more.mouseenter(function () {
        clearTimeout(help_timer);
        help_more_list.addClass('help-more-list-active');
    })

    help_menu_more.mouseleave(function(){
        clearTimeout(help_timer);
        help_timer = setTimeout(helplistHide, help_delay);
    })

    function helplistHide(){
        help_more_list.removeClass('help-more-list-active');
    }

    help_more_list.mouseenter(function(){
        clearTimeout(help_timer);
        $(this).addClass('help-more-list-active');
    })

    help_more_list.mouseleave(function(){
        $(this).removeClass('help-more-list-active');
    })

    //로그인메뉴
    let login = $('.login');
    let login_more = $('.login-more');

    login.mouseenter(function () {
        login_more.addClass('login-more-active');
    })

    login.mouseleave(function(){
        clearTimeout(help_timer);
        help_timer = setTimeout(loginHide, help_delay);
    })

    function loginHide(){
        login_more.removeClass('login-more-active');
    }

    login_more.mouseenter(function(){
        clearTimeout(help_timer);
        $(this).addClass('login-more-active');
    })

    login_more.mouseleave(function () {
        $(this).removeClass('login-more-active');
    })

    //언어메뉴
    let language = $('.language');
    let language_more = $('.language-more');

    language.mouseenter(function () {
        language_more.addClass('language-more-active');
    })

    language.mouseleave(function(){
        clearTimeout(help_timer);
        help_timer = setTimeout(languageHide, help_delay);
    })

    function languageHide(){
        language_more.removeClass('language-more-active');
    }

    language_more.mouseenter(function(){
        clearTimeout(help_timer);
        $(this).addClass('language-more-active');
    })

    language_more.mouseleave(function () {
        $(this).removeClass('language-more-active');
    })

    // search 검색창
    let search_wrap = $('.search-wrap');
    let search_fn = $('#search-fn');

    // search icon 누르면 검색창 나타나기
    $('.search').click(function(){
        search_wrap.show();
    })

    // X 누르면 사라지기
    $('.search-close').click(function(){
        search_wrap.hide();
    })

    // 포커스 처리
    search_fn.focus(function(){
        search_fn.addClass('search-fn-focus');
    });
    // 포커스 비처리
    search_fn.blur(function(){
        search_fn.removeClass('search-fn-focus');
    });

    $('#form-search').submit(function(){
        let temp = search_fn.val();
        if(!temp) {
            alert('내용을 입력하세요.');
            return false;
        }        
    });

    //검색창에 글자 입력하면 X표시 나타나게 하기
    search_fn.on('input', function(){
        if(search_fn.val() !== ''){
            $('.search-fn-del').css('display', 'block');
        }else{
            $('.search-fn-del').css('display', 'none');
        }
    })

    // 할인 시계

    let today_onsale;
    
    function todayOnly(){
        let now = new Date();
        let hours = (23 - now.getHours()); //시간
        let minutes = (60 - now.getMinutes()); //분
        let seconds = (60 - now.getSeconds()); //초

        if(hours < 10){
            hours = "0" + hours;
        }     
        if(minutes < 10){
            minutes = "0" + minutes;
        }        
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        let discount = $('.discount');
        discount.text(hours + ':' + minutes + ':' + seconds);
    
    }

    clearInterval(today_onsale)
    today_onsale = setInterval(todayOnly, 1000);

});

window.onload = function () {

    // 비주얼 슬라이드

    let sw_visual = new Swiper('.sw-visual', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOninteraction: false,
        },
        pagination: {
            el: '.sw-visual-pg',
            clickable: true,
        },
        navigation: {
            nextEl: '.sw-visual-next',
            prevEl: '.sw-visual-prev',
        },
    })

    let sw_visual_pause = $('.sw-visual-pause');
    sw_visual_pause.click(function () {
        let temp = sw_visual_pause.hasClass('sw-visual-pause-on');
        if (temp != true) {
            sw_visual_pause.addClass('sw-visual-pause-on');
            sw_visual.autoplay.stop();
        } else {
            sw_visual_pause.removeClass('sw-visual-pause-on');
            sw_visual.autoplay.start();
        }
    })

    // 이번 주 인기 상품 슬라이드

    let sw_thisweek = new Swiper('.sw-thisweek', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.sw-next',
            prevEl: '.sw-prev',
        },

    })

    // 리뷰 베스트 슬라이드

    let sw_review = new Swiper('.sw-review', {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 0,
        navigation: {
            nextEl: '.sw-next',
            prevEl: '.sw-prev',
        },

    })

    // 하단 공지영역 슬라이드
    let sw_notice_list = new Swiper('.sw-notice-list', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOninteraction: false,
        },
        direction: 'vertical',
    })



}