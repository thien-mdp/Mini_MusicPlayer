// Base Js
const main = document.querySelector('.main'),
    listSongWrap = main.querySelector('.songs-list__songs'),
    songImg = main.querySelector('.disc-wrap img'),
    songName = main.querySelector('.disc-wrap__name'),
    songAuthor = main.querySelector('.disc-wrap__author'),
    mainAudio = main.querySelector('#main-audio'),
    playBtn = main.querySelector('.play'),
    pauseBtn = main.querySelector('.pause'),
    backBtn = main.querySelector('.back'),
    nextBtn = main.querySelector('.next'),
    progressArea = main.querySelector('.progress-area'),
    progressBar = main.querySelector('.progress-bar'),
    navList = main.querySelector('.nav__list'),
    navListMB = main.querySelector('.nav__mobile .nav__list');

let musicIndex = Math.floor(Math.random() * allMusic.length + 1);

// Start
window.addEventListener('load', () => {
    loadMusic(musicIndex);
    playingNow();
    scrollActiveSongToView();

    // Js Tĩnh
    // Love Loved
    const love = document.querySelectorAll('.love');
    love.forEach((luv) => {
        luv.addEventListener('click', () => {
            luv.classList.toggle('active');
        });
    });
    // Volume Bar
    const volBtn = main.querySelector('.vol');
    volBtn.onclick = () => {
        volBtn.classList.toggle('active');
    };
    // Nav Change Tab
    const navA = document.querySelectorAll('.nav__list-item-link');
    navA.forEach((a) => {
        a.onclick = () => {
            navA.forEach((a) => {
                if (a.classList.contains('active')) {
                    a.classList.remove('active');
                }
            });
            a.classList.add('active');
        };
    });
});

// MAIN JS
// Render Number Of Songs
const headingArea = main.querySelector('.main-area__heading');
headingArea.innerHTML = `<h3>Most Popular</h3>
  <span>${allMusic.length} Songs (<a href="https://soundcloud.com">© SoundCloud</a>)</span>`;

// Render Music Into Web
function renderMusic() {
    const arrRender = [];
    for (var i = 0; i < allMusic.length; i++) {
        var htmls = `<div class="song">
                        <div class="song-info" div-index='${
                            i + 1
                        }' onclick='clicked(this)'>
                        <img src="src/public/list_music/img_song/${
                            allMusic[i].img
                        }.jpg" alt="${allMusic[i].img} img">
                        <span class="song-info__number">${i + 1}</span>
                        <span class="song-info__author">${
                            allMusic[i].author
                        }</span>
                        <span class="song-info__dash">-</span>
                        <span class="song-info__name">${allMusic[i].name}</span>
                        </div>
                        <i class="ri-heart-fill love"></i>
                    </div>`;
        arrRender.push(htmls);
    }
    listSongWrap.innerHTML = arrRender.join('');
}

// Load Music To Disc Function
function loadMusic(indexNum) {
    songName.innerText = allMusic[indexNum - 1].name;
    songAuthor.innerText = allMusic[indexNum - 1].author;
    songImg.src = `src/public/list_music/img_song/${
        allMusic[indexNum - 1].img
    }.jpg`;
    songImg.alt = `${allMusic[indexNum - 1].src} img`;
    mainAudio.src = `src/public/list_music/song/${
        allMusic[indexNum - 1].src
    }.mp3`;
}

// CD Rotate
const cdAnimate = songImg.animate([{ transform: 'rotate(360deg)' }], {
    duration: 10000,
    iterations: Infinity,
});
cdAnimate.pause();

// Play, Pause Music Function
function playMusic() {
    playBtn.classList.add('active');
    mainAudio.play();
    cdAnimate.play();
}
function pauseMusic() {
    playBtn.classList.remove('active');
    mainAudio.pause();
    cdAnimate.pause();
}

// Back, Next Music Function
function backMusic() {
    musicIndex--;
    musicIndex < 1 ? (musicIndex = allMusic.length) : musicIndex;
    loadMusic(musicIndex);
    playMusic();
}
function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? (musicIndex = 1) : musicIndex;
    loadMusic(musicIndex);
    playMusic();
}
//toastMs
navList.addEventListener('click', () => {
    toast({
        title: 'Info',
        message: 'Coming soon...',
        type: 'info',
        duration: 2500
    });
});
navListMB.addEventListener('click', () => {
    toast({
        title: 'Info',
        message: 'Coming soon...',
        type: 'info',
        duration: 2500
    });
});
// Play, Pause Btn Event
playBtn.addEventListener('click', () => {
    const isMusicPause = playBtn.classList.contains('active');
    if (!isMusicPause) {
        playMusic();
    }
});
pauseBtn.addEventListener('click', () => {
    const isMusicPlay = playBtn.classList.contains('active');
    if (isMusicPlay) {
        pauseMusic();
    }
});

// Back, Next Btn Event
backBtn.addEventListener('click', () => {
    backMusic();
    playingNow();
    scrollActiveSongToView();
});
nextBtn.addEventListener('click', () => {
    nextMusic();
    playingNow();
    scrollActiveSongToView();
});


// Progress Bar Update Time
mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime * 100) / duration;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = main.querySelector('.current'),
        musicDuration = main.querySelector('.duration');

    mainAudio.addEventListener('loadeddata', () => {
        // Duration Update
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;
    });

    // Current Time Update
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

// Progress Bar Update Time When Click
progressArea.addEventListener('click', (e) => {
    let progressWidthValue = progressArea.clientWidth;
    let clickOffSetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickOffSetX * songDuration) / progressWidthValue;
    playMusic();
});



// Song Repeat, Shuffle
const repeatBtn = main.querySelector('.repeat');
repeatBtn.addEventListener('click', () => {
    let getText = repeatBtn.innerText;
    switch (getText) {
        case 'repeat':
            repeatBtn.innerText = 'repeat_one';
            break;
        case 'repeat_one':
            repeatBtn.innerText = 'shuffle';
            break;
        case 'shuffle':
            repeatBtn.innerText = 'repeat';
            break;
    }
});

mainAudio.addEventListener('ended', () => {
    let getText = repeatBtn.innerText;
    switch (getText) {
        case 'repeat':
            nextMusic();
            playingNow();
            scrollActiveSongToView();
            break;
        case 'repeat_one':
            mainAudio.currentTime = 0;
            loadMusic(musicIndex);
            playMusic();
            break;
        case 'shuffle':
            let randIndex = Math.floor(Math.random() * allMusic.length + 1);
            do {
                randIndex = Math.floor(Math.random() * allMusic.length + 1);
            } while (musicIndex === randIndex);
            musicIndex = randIndex;
            loadMusic(musicIndex);
            playingNow();
            scrollActiveSongToView();
            playMusic();
            break;
    }
});

// Change Volume
function setVolume() {
    const volRange = main.querySelector('.volume-bar__range');
    mainAudio.volume = volRange.value / 100;
}

// Not render --> Not Worrking?
renderMusic();
// Set Class 'playing'
const allSong = listSongWrap.querySelectorAll('div.song');
const allSongInfo = listSongWrap.querySelectorAll('div.song-info');
function playingNow() {
    for (let j = 0; j < allSongInfo.length; j++) {
        if (allSong[j].classList.contains('playing')) {
            allSong[j].classList.remove('playing');
        }
        if (allSongInfo[j].getAttribute('div-index') == musicIndex) {
            allSong[j].classList.add('playing');
        }
    }
}

// Play Song When Click
function clicked(element) {
    let getDivIndex = element.getAttribute('div-index');
    musicIndex = getDivIndex;
    loadMusic(musicIndex);
    playMusic();
    playingNow();
}

// Scroll Into View
function scrollActiveSongToView() {
    setTimeout(() => {
        main.querySelector('.song.playing').scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        });
    }, 300);
}

// Shortcut Key On PC
document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    switch (e.which) {
        case 32:
            if (!playBtn.classList.contains('active')) {
                playMusic();
            } else {
                pauseMusic();
            }
            break;
        case 37:
            backMusic();
            playingNow();
            scrollActiveSongToView();
            break;
        case 39:
            nextMusic();
            playingNow();
            scrollActiveSongToView();
            break;
    }
}

// Prevent F5 Or Change Redirect
// window.addEventListener('beforeunload', (event) => {
//     event.preventDefault();
//     event.returnValue = 'hello';
// });
