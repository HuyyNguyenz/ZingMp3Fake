const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const config = $('.header-config__icon');
const configShow = $('.header-config__show');
const option = $('.user-btn a:nth-child(3)');
const signOut = $('.user-btn__sign-out');
const searchHistory = $('.header-history ul');
const ulConfigShow = $('.header-config__show ul');
const heartFillIcon = $('.music-player__left-option i:first-child');
const heartIcon = $('.music-player__left-option i:nth-child(2)');
const contentNavbarItems = $$('.content__navbar-item');
const imgList = $$('.content__slide-item');
const headerNav = $('.header-wrap');

// Xử lý đóng mở config && sign-out
config.onclick = function (e) {
    isBlock = configShow.classList.contains('block');
    if (isBlock) {
        configShow.classList.remove('block');
    }
    else {
        configShow.classList.add('block');
    }
    e.stopPropagation();
};

option.onclick = function (e) {
    isOpen = signOut.classList.contains('open');
    if (isOpen) {
        signOut.classList.remove('open');
    }
    else {
        signOut.classList.add('open');
    }
    e.stopPropagation();
}

document.onclick = function () {
    configShow.classList.remove('block');
    signOut.classList.remove('open');
}

// Fix lỗi blur mất focus
searchHistory.onmousedown = function (e) {
    e.preventDefault();
}

ulConfigShow.onclick = function (e) {
    e.stopPropagation();
}

// Xử lý click trái tim
heartFillIcon.onclick = function (e) {
    if (!e.target.classList.contains('delete')) {
        e.target.classList.add('delete');
        heartIcon.classList.add('block');
    }
}

heartIcon.onclick = function (e) {
    if (e.target.classList.contains('block')) {
        heartFillIcon.classList.remove('delete');
        e.target.classList.remove('block');
    }
}

// Xử lý click content__navbar-item active
contentNavbarItems.forEach(function (item) {
    item.onclick = function () {
        $('.content__navbar-item.active').classList.contains('active');
        $('.content__navbar-item.active').classList.remove('active');
        this.classList.add('active');

        switch (this.dataset.index) {
            case '0':
                $('.content__play-music').style.display = 'flex';
                $('.content__playlist-open').style.display = 'none';
                $('.content__album-open').style.display = 'none';
                $('.content__mv-open').style.display = 'none';
                $('.content__singer-open').style.display = 'none';
                $('.grid .row:first-child').classList.add('mb-100');
                $('.grid .row:first-child').style.display = 'block';
                $('.grid .row:nth-child(3)').style.display = 'block';
                $('.grid .row:nth-child(4)').style.display = 'block';
                $('.grid .row:nth-child(5)').style.display = 'block';
                $('.grid .row:nth-child(6)').style.display = 'block';
                $('.grid .row:nth-child(7)').style.display = 'none';
                musicListOpen.style.display = 'none';
                break;
            case '1':
                $('.content__play-music').style.display = 'none';
                $('.grid .row:first-child').style.display = 'block';
                $('.grid .row:first-child').classList.remove('mb-100');
                $('.grid .row:nth-child(2)').style.display = 'block';
                $('.grid .row:nth-child(3)').style.display = 'none';
                $('.grid .row:nth-child(4)').style.display = 'none';
                $('.grid .row:nth-child(5)').style.display = 'none';
                $('.grid .row:nth-child(6)').style.display = 'none';
                $('.grid .row:nth-child(7)').style.display = 'none';
                musicListOpen.style.display = 'block';
                break;
            case '2':
                $('.grid .row:first-child').style.display = 'none';
                $('.content__playlist-open').style.display = 'block';
                $('.grid .row:nth-child(3)').style.display = 'block';
                $('.grid .row:nth-child(4)').style.display = 'none';
                $('.grid .row:nth-child(5)').style.display = 'none';
                $('.grid .row:nth-child(6)').style.display = 'none';
                $('.grid .row:nth-child(7)').style.display = 'none';
                musicListOpen.style.display = 'none';
                break;
            case '3':
                $('.content__album-open').style.display = 'block';
                $('.grid .row:first-child').style.display = 'none';
                $('.grid .row:nth-child(2)').style.display = 'none';
                $('.grid .row:nth-child(3)').style.display = 'none';
                $('.grid .row:nth-child(4)').style.display = 'block';
                $('.grid .row:nth-child(5)').style.display = 'none';
                $('.grid .row:nth-child(6)').style.display = 'none';
                $('.grid .row:nth-child(7)').style.display = 'none';
                break;
            case '4':
                $('.grid .row:first-child').style.display = 'none';
                $('.grid .row:nth-child(2)').style.display = 'none';
                $('.grid .row:nth-child(3)').style.display = 'none';
                $('.grid .row:nth-child(4)').style.display = 'none';
                $('.grid .row:nth-child(5)').style.display = 'block';
                $('.grid .row:nth-child(6)').style.display = 'none';
                $('.grid .row:nth-child(7)').style.display = 'none';
                $('.content__mv-open').style.display = 'block';
                break;
            case '5':
                $('.grid .row:first-child').style.display = 'none';
                $('.grid .row:nth-child(2)').style.display = 'none';
                $('.grid .row:nth-child(3)').style.display = 'none';
                $('.grid .row:nth-child(4)').style.display = 'none';
                $('.grid .row:nth-child(5)').style.display = 'none';
                $('.grid .row:nth-child(6)').style.display = 'block';
                $('.grid .row:nth-child(7)').style.display = 'none';
                $('.content__singer-open').style.display = 'block';
                break;
            case '6':
                $('.grid .row:first-child').style.display = 'none';
                $('.grid .row:nth-child(2)').style.display = 'none';
                $('.grid .row:nth-child(3)').style.display = 'none';
                $('.grid .row:nth-child(4)').style.display = 'none';
                $('.grid .row:nth-child(5)').style.display = 'none';
                $('.grid .row:nth-child(6)').style.display = 'none';
                $('.grid .row:nth-child(7)').style.display = 'block';
                break;
        }
    }
})

//  Xử lý slider
setInterval(function () {
    imgList.forEach(function (img) {
        img.classList.replace('first', 'fifth');
        img.classList.replace('second', 'first');
        img.classList.replace('third', 'second');
        img.classList.replace('fourth', 'third');
        img.classList.replace('fifth', 'fourth');
    })
}, 3000)

// Xử lý scroll headerNav
document.onscroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        headerNav.style.backgroundColor = '#37075d';
    }
    else
        headerNav.style.backgroundColor = 'transparent';
}

//  Xử lý click title
for (let i = 0; i < contentNavbarItems.length; i++) {
    $('.content__title-left').onclick = () => {
        contentNavbarItems[1].click();
    }

    $('.content__playlist-header').onclick = () => {
        contentNavbarItems[2].click();
    }

    $('.content__album-header').onclick = () => {
        contentNavbarItems[3].click();
    }

    $('.content__mv-header').onclick = () => {
        contentNavbarItems[4].click();
    }

    $('.content__singer-header').onclick = () => {
        contentNavbarItems[5].click();
    }
}