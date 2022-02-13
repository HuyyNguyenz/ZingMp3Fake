const musicList = $('.content__music-list');
const musicListOpen = $('.music__list-all');
const playListOpen = $('.content__playlist-open .row');
const albumOpen = $('.content__album-open .row');
const mvOpen = $('.content__mv-open .row');
const singerOpen = $('.content__singer-open .row');
const songName = $('.music-player__left-desc marquee');
const singerName = $('.music-player__left-desc span');
const songImage = $('.music-player__left img');
const durationTime = $('.durationtime');
const audio = $('#audio');
const playBtn = $('.control__play');
const pauseBtn = $('.control__pause');
const progress = $('#progress');
const progressUpdate = $('.progress__track-update');
const randomBtn = $('.control__random');
const prevBtn = $('.control__prev');
const nextBtn = $('.control__next');
const repeatBtn = $('.control__repeat');
const trackTime = $('.tracktime');
const volume = $('.volume > i');
const volumeMuted = $('.volume i:nth-child(2)');
const volumeProgress = $('#volume-range');
const volumeUpdate = $('.volume__progress .progress__track .progress__track-update');

const app = {
    currentIndex: 0,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Chạy Về Khóc Với Anh (remix)',
            singer: 'Erik',
            image: './assets/images/music/img1.jpg',
            path: './assets/audios/song1.mp3',
            time: '03:25'
        },
        {
            name: 'Không Trọn Vẹn Nữa (remix)',
            singer: 'Châu Khải Phong, ACV',
            image: './assets/images/music/img2.jpg',
            path: './assets/audios/song2.mp3',
            time: '04:06'
        },
        {
            name: 'Tộc Ca',
            singer: 'Phúc Du, Sonbeat',
            image: './assets/images/music/img3.jpg',
            path: './assets/audios/song3.mp3',
            time: '03:11'
        },
        {
            name: 'Độ Tộc 2',
            singer: 'Masew, Độ Mixi, Phúc Du, Pháo',
            image: './assets/images/music/img4.jpg',
            path: './assets/audios/song4.mp3',
            time: '03:21'
        },
        {
            name: 'Hạt Mưa Vương Vấn',
            singer: 'Dung Hoang Pham Cover',
            image: './assets/images/music/img5.jpg',
            path: './assets/audios/song5.mp3',
            time: '05:03'
        },
        {
            name: 'Em Nào Có Tội',
            singer: 'Thương Võ, ACV',
            image: './assets/images/music/img6.jpg',
            path: './assets/audios/song6.mp3',
            time: '04:51'
        },
        {
            name: 'Thì Thôi',
            singer: 'TVK, NAL',
            image: './assets/images/music/img7.jpg',
            path: './assets/audios/song7.mp3',
            time: '03:58'
        },
        {
            name: 'Yêu Đừng Sợ Đau',
            singer: 'Ngô Lan Hương',
            image: './assets/images/music/img8.jpg',
            path: './assets/audios/song8.mp3',
            time: '06:01'
        },
        {
            name: 'Hoa Tan Tình Tan (remix)',
            singer: 'Giang Jolee',
            image: './assets/images/music/img9.jpg',
            path: './assets/audios/song9.mp3',
            time: '04:00'
        },
        {
            name: 'Sài Gòn Có Em',
            singer: 'Blacka',
            image: './assets/images/music/img10.jpg',
            path: './assets/audios/song10.mp3',
            time: '02:25'
        },
    ],
    playList: [
        {
            title: 'Những bản nhạc Dance hay nhất',
            name: 'Đạt Tấn',
            image: './assets/images/img/playlist6.jpg'
        },
        {
            title: 'Em Hát Ai Nghe',
            name: 'Ngọc Trâm',
            image: './assets/images/img/playlist7.jpg'
        },
        {
            title: 'Chill cùng Đen Vâu',
            name: 'Trà My',
            image: './assets/images/img/playlist8.jpg'
        },
        {
            title: 'Những bản hit hay nhất của Sơn Tùng MTP',
            name: 'Nguyễn Thành Công',
            image: './assets/images/img/playlist9.jpg'
        },
        {
            title: 'Thế Giới V-Pop Vol. 3',
            name: 'Zing MP3',
            image: './assets/images/img/playlist10.jpg'
        },
        {
            title: 'BodyTalk',
            name: 'Lâm Huy',
            image: './assets/images/img/playlist11.jpg'
        },
        {
            title: 'Playlist Này Chill Phết',
            name: 'Zing MP3',
            image: './assets/images/img/playlist12.jpg'
        },
        {
            title: 'BlackJack',
            name: 'Zing MP3',
            image: './assets/images/img/playlist13.jpg'
        },
        {
            title: '4U - On Repeat',
            name: 'Zing MP3',
            image: './assets/images/img/playlist14.jpg'
        },
        {
            title: 'Những Bài Hát Hay Nhất Của Mr. Siro',
            name: 'Zing MP3',
            image: './assets/images/img/playlist15.jpg'
        },
        {
            title: 'Top EDM Songs Of 2018',
            name: 'Zing MP3',
            image: './assets/images/img/playlist16.jpg'
        },
        {
            title: 'Giai Điệu Và Trào Lưu Gây Sốt',
            name: 'Zing MP3',
            image: './assets/images/img/playlist17.jpg'
        },
        {
            title: 'Những Bài Hát Hay Nhất Của HKT',
            name: 'Zing MP3',
            image: './assets/images/img/playlist18.jpg'
        },
        {
            title: '100% Gây Nghiện',
            name: 'Zing MP3',
            image: './assets/images/img/playlist19.jpg'
        },
        {
            title: 'Nhạc Việt Được Nghe Nhiều Nhất',
            name: 'Zing MP3',
            image: './assets/images/img/playlist20.jpg'
        },
        {
            title: 'Dance Việt Hay Nhất',
            name: 'Zing MP3',
            image: './assets/images/img/playlist21.jpg'
        },
    ],
    album: [
        {
            name: 'Justice (Mini Album)',
            image: './assets/images/img/album6.jpg'
        },
        {
            name: 'Teenage Dream',
            image: './assets/images/img/album7.jpg'
        },
        {
            name: 'The Off Season',
            image: './assets/images/img/album8.jpg'
        },
        {
            name: 'The Album',
            image: './assets/images/img/album9.jpg'
        },
        {
            name: 'Random Access Memories',
            image: './assets/images/img/album10.jpg'
        },
        {
            name: 'Map of the Soul: 7',
            image: './assets/images/img/album11.jpg'
        },
        {
            name: 'Chromatica',
            image: './assets/images/img/album12.jpg'
        },
        {
            name: 'My Turn',
            image: './assets/images/img/album13.jpg'
        },
        {
            name: 'Meet the Woo 2',
            image: './assets/images/img/album14.jpg'
        },
        {
            name: 'Lemonade',
            image: './assets/images/img/album15.jpg'
        },
    ],
    mv: [
        {
            name: '24H',
            author: 'LyLy, Magazine',
            avatar: './assets/images/img/artist4.jpg',
            image: './assets/images/img/mv4.jpg',
            time: '04:18',
        },
        {
            name: 'Nước Mắt Em Lau Bằng Tình Yêu Mới',
            author: 'Da LAB, Tóc Tiên',
            avatar: './assets/images/img/artist5.jpg',
            image: './assets/images/img/mv5.jpg',
            time: '05:45',
        },
        {
            name: 'Yêu Đơn Phương',
            author: 'OnlyC, Karik',
            avatar: './assets/images/img/artist6.jpg',
            image: './assets/images/img/mv6.jpg',
            time: '05:02',
        },
        {
            name: 'Phía Sau Em',
            author: 'Kay Trần, Binz',
            avatar: './assets/images/img/artist7.jpg',
            image: './assets/images/img/mv7.jpg',
            time: '04:06',
        },
        {
            name: 'Mình Yêu nhau đi',
            author: 'Bích Phương',
            avatar: './assets/images/img/artist8.jpg',
            image: './assets/images/img/mv8.jpg',
            time: '03:52',
        },
        {
            name: 'Đừng Về Trễ (Acoustic Version)',
            author: 'Sơn Tùng M-TP',
            avatar: './assets/images/img/artist9.jpg',
            image: './assets/images/img/mv9.jpg',
            time: '04:41',
        },
        {
            name: 'Hơn Cả Yêu',
            author: 'Đức Phúc',
            avatar: './assets/images/img/artist10.jpg',
            image: './assets/images/img/mv10.jpg',
            time: '05:43',
        },
        {
            name: 'Vì Yêu Cứ Đâm Đầu',
            author: 'MIN, Đen, JustaTee',
            avatar: './assets/images/img/artist11.jpg',
            image: './assets/images/img/mv11.jpg',
            time: '04:01',
        },
        {
            name: 'Sao Anh Chưa Về Nhà',
            author: 'AMEE, Ricky Star',
            avatar: './assets/images/img/artist12.jpg',
            image: './assets/images/img/mv12.jpg',
            time: '04:36',
        },
        {
            name: 'Bigcityboi',
            author: 'Binz, Touliver',
            avatar: './assets/images/img/artist13.jpg',
            image: './assets/images/img/mv13.jpg',
            time: '03:43',
        },
        {
            name: 'Em Không Sai Chúng Ta Sai',
            author: 'ERIK',
            avatar: './assets/images/img/artist14.jpg',
            image: './assets/images/img/mv14.jpg',
            time: '06:28',
        },
    ],
    singer: [
        {
            avatar: './assets/images/img/artist6\ \(1\).jpg',
            name: 'Mr.Siro',
            follower: '735K quan tâm',
        },
        {
            avatar: './assets/images/img/artist7\ \(1\).jpg',
            name: 'Han Sara',
            follower: '158K quan tâm',
        },
        {
            avatar: './assets/images/img/artist8\ \(1\).jpg',
            name: 'Bích Phương',
            follower: '368K quan tâm',
        },
        {
            avatar: './assets/images/img/artist9\ \(1\).jpg',
            name: 'Soobin',
            follower: '435K quan tâm',
        },
        {
            avatar: './assets/images/img/artist10\ \(1\).jpg',
            name: 'Chi Dân',
            follower: '516K quan tâm',
        },
    ],
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex];
            }
        })
    },
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="content__music-list-item ${index === this.currentIndex ? 'active' : ''}" data-index = '${index}'>
                    <div class="item-left">
                        <div class="item-left__img">
                            <img src= ${song.image}>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div class="item-left__content">
                            <p>${song.name}</p>
                            <span>${song.singer}</span>
                        </div>
                    </div>

                    <div class="item-center">
                        <span>${song.time}</span>
                    </div>

                    <div class="item-right">
                        <div class="item-right__micro">
                            <i class="fas fa-microphone"></i>
                        </div>

                        <div class="item-right__heart-fill">
                            <i class="fas fa-heart"></i>
                        </div>

                        <div class="item-right__option">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            `
        }).join('');
        musicList.innerHTML = htmls;
        musicListOpen.innerHTML = htmls;
    },
    renderPlayList: function () {
        const htmls = this.playList.map((item, index) => {
            return `
                <div class="col l-2-4 m-3 c-4 mb-20">
                    <div class="content__playlist-item">
                        <div class="img-hover">
                            <div class="img"
                                style="background: url('${item.image}') no-repeat center center / cover">
                                <div class="img-action">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <p>${item.title}</p>
                        <span>${item.name}</span>
                    </div>
                </div>
            `
        }).join('');
        playListOpen.innerHTML = htmls;
    },
    renderAlbum: function () {
        const htmls = this.album.map((item, index) => {
            return `
                <div class="col l-2-4 m-3 c-4 mb-20">
                    <div class="content__playlist-item">
                        <div class="img-hover">
                            <div class="img"
                                style="background: url('${item.image}') no-repeat center center / cover">
                                <div class="img-action">
                                    <i class="fa-solid fa-heart"></i>
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fas fa-ellipsis-h"></i>
                                </div>
                            </div>
                        </div>
                        <p>${item.name}</p>
                    </div>
                </div>
            `
        }).join('');
        albumOpen.innerHTML = htmls;
    },
    renderMV: function () {
        const htmls = this.mv.map((item, index) => {
            return `
                <div class="col l-4 m-6 c-12 mb-20">
                    <div class="content__mv-item">
                        <div class="content__mv-item-box">
                            <div class="image"
                                style="background: url('${item.image}') no-repeat center center / cover">
                                <div class="image-action">
                                    <i class="fa-solid fa-circle-play"></i>
                                    <i class="fa-solid fa-x"></i>
                                </div>
                            </div>
                            <span class="image-time">${item.time}</span>
                        </div>

                        <div class="content__mv-item-des">
                            <img src="${item.avatar}">
                            <div class="des-box">
                                <p>${item.name}</p>
                                <span>${item.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('');
        mvOpen.innerHTML = htmls;
    },
    renderSinger: function () {
        const htmls = this.singer.map((item, index) => {
            return `
                <div class="col l-2-4 m-3 c-6 mb-20">
                    <div class="content__singer-item">
                        <div class="content__singer-item-box">
                            <div class="picture"
                                style="background: url('${item.avatar}') no-repeat center center / cover">
                                <div class="picture-action">
                                    <i class="fa-solid fa-circle-play"></i>
                                </div>
                            </div>
                        </div>

                        <div class="content__singer-item-des">
                            <div class="singer-name">
                                <span>${item.name}</span>
                                <i class="fa-solid fa-star"></i>
                            </div>

                            <div class="singer-follow">
                                <p>${item.follower}</p>
                            </div>

                            <div class="singer-btn">
                                <i class="fa-solid fa-check"></i>
                                <a href="#">ĐÃ QUAN TÂM</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }).join('');
        singerOpen.innerHTML = htmls;
    },
    handleEvents: function () {
        // CD rotate
        const songImageAnimate = songImage.animate([
            {
                transform: 'rotate(360deg)'
            }
        ], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        })
        songImageAnimate.pause();

        // When song play
        const play = () => {
            audio.play();
            playBtn.classList.add('delete');
            pauseBtn.classList.add('block');
            songImageAnimate.play();
            this.render();
            this.scrollToActiveSong();
        }

        // When song pause
        const pause = () => {
            audio.pause();
            playBtn.classList.remove('delete');
            pauseBtn.classList.remove('block');
            songImageAnimate.pause();
        }

        playBtn.addEventListener('click', play);
        pauseBtn.addEventListener('click', pause);

        // When song play then progress update
        audio.ontimeupdate = () => {
            if (audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent;
                progressUpdate.style.width = `${progressPercent}%`;
            }
            // update tracktime when song play
            let currentTime = audio.currentTime;
            let currentMin = Math.floor(currentTime / 60);
            let currentSec = Math.floor(currentTime % 60);
            if (currentSec < 10) {
                currentSec = `0${currentSec}`;
            }
            trackTime.innerText = `0${currentMin}:${currentSec}`;
        }

        //  When seek progress
        progress.oninput = (e) => {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        }

        //  When next song
        nextBtn.onclick = () => {
            if (this.isRandom) {
                this.playRandomSong();
            }
            else {
                this.nextSong();
            }
            play();
        }

        //  When prev song
        prevBtn.onclick = () => {
            if (this.isRandom) {
                this.playRandomSong();
            }
            else {
                this.prevsong();
            }
            play();
        }

        // When song ended
        audio.onended = () => {
            if (this.isRandom) {
                this.playRandomSong();
            }
            else if (this.isRepeat) {
                play();
            }
            else {
                this.nextSong();
            }
            play();
        }

        //  When random song
        randomBtn.onclick = () => {
            this.isRandom = !this.isRandom;
            randomBtn.classList.toggle('active', this.isRandom);
        }

        // When repeat song 
        repeatBtn.onclick = () => {
            this.isRepeat = !this.isRepeat;
            repeatBtn.classList.toggle('active', this.isRepeat);
        }

        // Click song in playlist
        musicList.onclick = (e) => {
            const songNode = e.target.closest('.content__music-list-item:not(.active)');
            if (songNode || e.target.closest('.item-right__option')
                || e.target.closest('.item-right__heart-fill') || e.target.closest('.item-right__micro')) {
                // Click song
                if (songNode) {
                    this.currentIndex = Number(songNode.dataset.index);
                    this.loadCurrentSong();
                    play();
                }
            }
        }
        musicListOpen.onclick = (e) => {
            const songNode = e.target.closest('.content__music-list-item:not(.active)');
            if (songNode || e.target.closest('.item-right__option')
                || e.target.closest('.item-right__heart-fill') || e.target.closest('.item-right__micro')) {
                // Click song
                if (songNode) {
                    this.currentIndex = Number(songNode.dataset.index);
                    this.loadCurrentSong();
                    play();
                }
            }
        }

        // Muted song
        volume.onclick = () => {
            volumeMuted.classList.add('block');
            volume.classList.add('delete');
            audio.muted = true;
            volumeUpdate.style.width = 0;
            volumeProgress.value = 0;
        }

        volumeMuted.onclick = () => {
            volume.classList.remove('delete');
            volumeMuted.classList.remove('block');
            audio.muted = false;
            volumeUpdate.style.width = '100%';
            volumeProgress.value = 100;
            audio.volume = volumeProgress.value / 100;
        }

        // Change volume
        volumeUpdate.style.width = '100%';
        volumeProgress.oninput = () => {
            if (volumeProgress.value === '0') {
                volumeMuted.classList.add('block');
                volume.classList.add('delete');
            }
            else {
                volume.classList.remove('delete');
                volumeMuted.classList.remove('block');
            }
            audio.volume = volumeProgress.value / 100;
            volumeUpdate.style.width = `${volumeProgress.value}%`;
        }
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.content__music-list-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }, 500)
    },
    loadCurrentSong: function () {
        songImage.src = this.currentSong.image;
        songName.innerText = this.currentSong.name;
        singerName.innerText = this.currentSong.singer;
        durationTime.innerText = this.currentSong.time;
        audio.src = this.currentSong.path;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevsong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function () {
        // Define Properties for Object
        this.defineProperties();

        // load currentSong in UI
        this.loadCurrentSong();

        // Handle Events DOM
        this.handleEvents();

        // Render music list
        this.render();

        // Render playList
        this.renderPlayList();

        // Render album
        this.renderAlbum();

        // Render mv
        this.renderMV();

        // Render singer
        this.renderSinger();
    }
}
app.start();