window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollY = window.scrollY || window.pageYOffset; // 獲取滾動距離

    // 設定最大縮小比例，根據滾動量調整縮放
    const scale = Math.max(0.95, 1 - (scrollY / 1000));

    // 應用縮放效果
    header.style.transform = `scale(${scale})`;

    // 如果滾動到一定程度，可以設定其他過渡到 faith 區域的效果
    if (scrollY > header.offsetHeight) {
        // 可以在這裡做其他的過渡效果
    }
});


// 滑入動畫
$('.smoove').smoove({
    // 因為此套件設定offset表示離底部高度 設定冒出視窗高度40%後出現  每個套件可能設定不同
    offset: '20%'
});

$('.smoove-z').smoove({
    // -500會先後退500 然後往前 反之500先前在後退
    moveZ: '-500px',
    rotateX: '90deg',
    // y軸設定是為了在翻轉時不要蓋到上面的div 所以讓元素下移
    moveY: '250px'
});

// 換頁與 gotop
$(function () {
    // 滑動至指定位置
    $('.menu a').click(function () {
        let btn = $(this).attr('href');
        // 變數不用'' 除非要抓html中的才要
        let pos = $(btn).offset();
        let offset = 175;
        // 1000毫秒 等於 1秒  scrolltop表示卷軸位置
        $('html,body').animate({ scrollTop: pos.top + offset }, 1000);
    });


    // 滑動至頂
    $('#gotop').click(function () {
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