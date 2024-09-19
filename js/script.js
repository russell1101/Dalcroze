// 首頁scale縮放
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const chairman = document.querySelector('#chairman');
    const scrollY = window.scrollY; // 獲取滾動距離


    // 設定最大縮小比例，根據滾動量調整縮放
    const scale = Math.max(0.95, 1 - (scrollY / 1000));;
    const borderRadius = Math.min(30, (scrollY / 100) * 30);

    // 應用縮放效果和圓角變化
    header.style.transform = `scale(${scale})`;
    header.style.borderRadius = `${borderRadius}px`;

    // 計算 chairman 區塊的 4/5 位置
    const chairmanHeight = window.innerHeight * 1.5; // chairman 的高度是 150vh
    const chairmanOffsetTop = chairman.offsetTop;
    const triggerPoint = chairmanOffsetTop + chairmanHeight * 0.4; // 4/5 的位置

    if (scrollY >= triggerPoint) {
        // 在滾動到 chairman 的 4/5 高度後開始縮放
        const chairmanScale = Math.max(0.85, 1 - ((scrollY - triggerPoint) / 3000));
        chairman.style.transform = `scale(${chairmanScale})`;
    } else {
        // 在 4/5 高度之前保持原始大小
        chairman.style.transform = 'scale(1)';
    }
});



// 滑入動畫
$('.smoove').smoove({
    // 因為此套件設定offset表示離底部高度 設定冒出視窗高度40%後出現  每個套件可能設定不同
    offset: '20%'
});

// $('.smoove-z').smoove({
//     // -500會先後退500 然後往前 反之500先前在後退
//     moveZ: '-500px',
//     rotateX: '90deg',
//     // y軸設定是為了在翻轉時不要蓋到上面的div 所以讓元素下移
//     moveY: '250px'
// });

// 換頁與 gotop
$(function () {
    // 滑動至指定位置
    $('.menu a').click(function () {
        let btn = $(this).attr('href');
        // 變數不用'' 除非要抓html中的才要
        let pos = $(btn).offset();
        // 1000毫秒 等於 1秒  scrolltop表示卷軸位置
        $('html,body').animate({ scrollTop: pos.top }, 1000);
    });

    $('.faithbtn').click(function () {
        let btn = $(this).attr('href');
        // 變數不用'' 除非要抓html中的才要
        let pos = $(btn).offset();
        let offset = 200;
        // 1000毫秒 等於 1秒  scrolltop表示卷軸位置
        $('html,body').animate({ scrollTop: pos.top + offset }, 1000);
    });

    // 滑動至頂
    $('#gotop').click(function () {
        // 會寫html,body 是因為不同瀏覽器的卷軸可能寫在其中之一的位置 所以兩個都寫才能確保都吃到
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    $('#home').click(function () {
        // 會寫html,body 是因為不同瀏覽器的卷軸可能寫在其中之一的位置 所以兩個都寫才能確保都吃到
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // 至頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast', 1);
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    });
})



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // 一次顯示3個卡片
    spaceBetween: 10, // 卡片之間的間隔
    centeredSlides: true, // 中間的卡片居中
    loop: true, // 循環播放
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 進度條點擊
        bulletClass: 'swiper-pagination-bullet', // 自定義進度條樣式
        bulletActiveClass: 'swiper-pagination-bullet-active', // 當前進度條樣式
    },
    autoplay: {
        delay: 2500, // 自動播放間隔時間
        disableOnInteraction: false, // 使用者交互後不禁用自動播放
    },
    grabCursor: true, // 滑鼠變為抓取手勢
    effect: 'coverflow', // 使用 coverflow 效果
    coverflowEffect: {
        rotate: 0, // 卡片不旋轉
        stretch: 0, // 每個卡片之間的拉伸程度
        depth: 300, // 景深距離
        modifier: 1, // 視差效果強度
        slideShadows: false, // 不顯示陰影
        scale: 1.2, // 中間卡片放大
    },
    navigation: {
        nextEl: '.swiper-button-next', // 右側箭頭
        prevEl: '.swiper-button-prev', // 左側箭頭
    },
    slideToClickedSlide: true, // 點擊卡片時跳轉到該卡片

    // 修正問題的重點：確保左右出現卡片數量一致
    loopAdditionalSlides: 1, // 確保額外的循環卡片數量，避免漏顯
    loopedSlides: 3, // 指定循環的卡片數量，與 slidesPerView 保持一致
});