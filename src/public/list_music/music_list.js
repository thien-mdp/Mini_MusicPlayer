const allMusic = [
    {
        name: 'Bắt Cóc Con Tim',
        author: 'Lou Hoàng',
        img: 'song-13',
        src: 'song-13',
    },
    {
        name: 'YOUR SMILE - Emma X Seachains X Obito',
        author: 'nthaomy 🧡',
        img: 'song-23',
        src: 'song-23',
    },
    // {
    //     name: 'Thiêu Thân',
    //     author: 'Bray x Sofia',
    //     img: 'song-3',
    //     src: 'song-3',
    // },
    {
        name: 'Ngày Khác Lạ',
        author: 'Đen, Giang Phạm, Triple D',
        img: 'song-4',
        src: 'song-4',
    },
    {
        name: 'Vì Mẹ Anh Bắt Chia Tay',
        author: 'Miu Lê - Karik - Châu Đăng Khoa',
        img: 'song-5',
        src: 'song-5',
    },
    {
        name: 'Bên Trên Tầng Lầu - Tăng Duy Tân',
        author: 'Huyn remix',
        img: 'song-17',
        src: 'song-17',
    },
    {
        name: 'Yêu Người Như Anh',
        author: 'B ray - Đạt G - Masew',
        img: 'song-7',
        src: 'song-7',
    },
    {
        name: 'Nevada x Đi Đi Đi',
        author: 'Daniel Mastro Mashup Remix',
        img: 'song-8',
        src: 'song-8',
    },
    {
        name: 'Hẹn Gặp Em Dưới Ánh Trăng',
        author: 'HIEUTHUHAI',
        img: 'song-9',
        src: 'song-9',
    },
    {
        name: 'Kìa Bóng Dáng Ai - Pháo | The Heroes',
        author: '_tsuhane',
        img: 'song-30',
        src: 'song-30',
    },
    {
        name: '3107 - 3 | W N X Nâu X Duongg X Titie ( Lofi Ver.)',
        author: 'tezdyy',
        img: 'song-19',
        src: 'song-19',
    },
    {
        name: 'Gặp Nhau Làm Ngơ',
        author: 'H2K - Offical',
        img: 'song-29',
        src: 'song-29',
    },
    {
        name: '2AM - JustaTee, BigDaddy',
        author: '✪ NT.Cose ✪',
        img: 'song-11',
        src: 'song-11',
    },
    {
        name: 'Giờ Thì Em Ơi Ta Đã Mất Nhau Rồi Remix | Rin Music',
        author: ' ⭐ 1 4 0 3 ⭐ ',
        img: 'song-27',
        src: 'song-27',
    },
    {
        name: 'Phải Chia Tay Thôi',
        author: 'Tuấn Hưng',
        img: 'song-12',
        src: 'song-12',
    },
    {
        name: 'Bật Nhạc Lên',
        author: 'HIEUTHUHAI - Harmonie',
        img: 'song-1',
        src: 'song-1',
    },
    {
        name: '[Offical Audio] Ghé Qua',
        author: 'Dick Ft. PC N ToFu',
        img: 'song-28',
        src: 'song-28',
    },
    {
        name: 'Chuyện Đôi Ta (DeeYouSee Remake) - Emcee L (Da LAB) Ft. Muộii',
        author: 'DeeYouSee',
        img: 'song-14',
        src: 'song-14',
    },
    {
        name: 'MASHUP LỠ DUYÊN | RUM X NIT',
        author: 'Rum',
        img: 'song-15',
        src: 'song-15',
    },
    // {
    //     name: 'Feel  Nguyen Axit Remix',
    //     author: 'Lemon',
    //     img: 'song-16',
    //     src: 'song-16',
    // },
    {
        name: 'Việt Nam Những Chuyến Đi',
        author: 'Vicky Nhung',
        img: 'song-6',
        src: 'song-6',
    },
    {
        name: 'Hết Nhạc Con Về',
        author: 'DUYB x NOT AFRAID',
        img: 'song-18',
        src: 'song-18',
    },
    {
        name: 'Mong Một Ngày Anh Nhớ Đến Em',
        author: 'Huỳnh James x Pjnboys',
        img: 'song-38',
        src: 'song-38',
    },
    {
        name: 'Cứu Vãn Kịp Không - Vương Anh Tú',
        author: '「 1 9 6 7 Remix 」',
        img: 'song-31',
        src: 'song-31',
    },
    {
        name: 'Bo Xì Bo - Bên Trên Tầng Lầu - See Tình Remix - Nhạc Trẻ Remix 2023 - Nhạc Hot TikTok 2023',
        author: '「 xMusics 」',
        img: 'song-32',
        src: 'song-32',
    },
    {
        name: 'Âm Thầm Bên Em',
        author: 'Sơn Tùng - MTP',
        img: 'song-24',
        src: 'song-24',
    },
    {
        name: 'CHƠI',
        author: 'Hieuthuhai - Ft. Manbo, Billy100 x LVK',
        img: 'song-37',
        src: 'song-37',
    },
    {
        name: 'Nắm Bàn Tay Say Cả Đời - Đạt Trần x Nâu ft. Elbi',
        author: 'Orinn remix',
        img: 'song-25',
        src: 'song-25',
    },
    {
        name: 'Anh Sẽ Luôn Thật Gần',
        author: 'Khùng',
        img: 'song-26',
        src: 'song-26',
    },
    {
        name: 'PHI HÀNH GIA',
        author: 'RENJA x SLOW T x LIL WUYN x KAIN x SUGAR CANE',
        img: 'song-36',
        src: 'song-36',
    },
    {
        name: 'Gieo Quẻ',
        author: 'Hoàng Thùy Linh',
        img: 'song-10',
        src: 'song-10',
    },
    {
        name: 'DẤU MƯA REMIX HOT TREND TIKTOK 2022',
        author: 'iam_vuong02',
        img: 'song-20',
        src: 'song-20',
    },
    {
        name: 'Hai Mươi Hai - AMEE',
        author: 'AMEE x CUKAK',
        img: 'song-33',
        src: 'song-33',
    },
    {
        name: 'Hoa Bằng Lăng',
        author: 'Kidz ( Prod. Tam Kê )',
        img: 'song-35',
        src: 'song-35',
    },
    {
        name: 'Em Là BadGirl',
        author: 'VP NIZ X Trần Huyền Diệp',
        img: 'song-34',
        src: 'song-34',
    },
];
