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
    offset: '20%',
    speed: 3000,   // 或調整動畫速度，讓過渡效果更平滑
});

// 換頁與 gotop
$(function () {
    // 滑動至指定位置
    $('.menu a').click(function () {
        let btn = $(this).attr('href');
        // 變數不用'' 除非要抓html中的才要
        let pos = $(btn).offset();
        let offset = 170;
        // 1000毫秒 等於 1秒  scrolltop表示卷軸位置
        $('html,body').animate({ scrollTop: pos.top + offset }, 1000);
    });

    $('#gotop').click(function () {
        // 停止所有當前的動畫，並立刻清除已經排隊的動畫
        $('html, body').stop().animate({ scrollTop: 0 }, 1000);
    });

    $('#home').click(function () {
        // 停止所有當前的動畫，並立刻清除已經排隊的動畫
        $('html, body').stop().animate({ scrollTop: 0 }, 1000);
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


// 輪播套件語法
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

    loopAdditionalSlides: 1, // 確保額外的循環卡片數量，避免漏顯
    loopedSlides: 3, // 指定循環的卡片數量，與 slidesPerView 保持一致
});


window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section'); // 獲取所有 section
    const topbar = document.getElementById('topbar');
    const menuLinks = document.querySelectorAll('.menu a'); // 獲取 menu 的所有連結
    const scrollPosition = window.scrollY + 100; // 當前滾動位置，增加 100 以考慮視窗的 offset

    let activeSection = ''; // 儲存當前可見的 section 的 id

    // 如果滾動位置小於 100，回到 header，讓 topbar 背景透明
    if (scrollPosition < 1000) {
        topbar.style.backgroundColor = 'transparent';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // 判斷滾動位置是否在該 section 內
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeSection = section.getAttribute('id');

                // 根據 section 設定不同的 topbar 背景色
                if (activeSection === 'faith') {
                    topbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                } else if (activeSection === 'chairman') {
                    topbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                } else if (activeSection === 'course') {
                    topbar.style.backgroundColor = 'transparent';
                } else if (activeSection === 'activity') {
                    topbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                } else {
                    topbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                }
            }
        });
    }

    // 依據 activeSection 設定相應的底線樣式
    menuLinks.forEach(link => {
        if (link.getAttribute('href').includes(activeSection)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
