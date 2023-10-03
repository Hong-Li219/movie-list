// 即將上映
let comMovies = [
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/iwgrJrfQGoS0EMtrCLkA-1080x1543.jpg",
    name: "SEE HEAR LOVE 看不見聽不見也愛你",
    date: "2023/07/07",
    actor: "新木優子、山下智久、山本舞香",
    introduce:
      "漫畫家泉本真治的作品即將被改編成電影，沒想到卻病倒並漸漸失去視力，眼前一片黑暗的真治甚至考慮從陽台一躍而下。就在這時，真治的漫畫迷，耳朵失聰的相田響拯救了他。「看不到」的漫畫家與「聽不到」的女孩，展開了不可思議的同居生活。",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/aXjX1euh4Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "愛情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/1iN96h5KClc3rkIPSm0H-1080x1541.jpg",
    name: "陰兒房：鬼門陰深處",
    date: "2023/07/07",
    actor: "派翠克威爾森、羅絲拜恩",
    introduce:
      "蘭伯特家族駭人故事的最終章。為了一勞永逸解決家人的惡夢，喬許和已經長大在大學就讀的兒子達頓，決定回到陰深處面對他們家族黑暗的過去，更深入紅門後的世界與惡魔對決。",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/MZJ-J3FyL54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "恐怖",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/YEOYfqWzGfmQCGAxoPIA-1024x1462.jpg",
    name: "元素方城市",
    date: "2023/07/06",
    actor: "無",
    introduce:
      "一座聚集空氣、水、火、土四大基本元素「民眾」共存居住的城市。強悍機智但脾氣火爆的火女「小炎」在與隨遇而安且充滿樂趣的「水弟」邂逅後，顛覆她對於周遭世界的觀點，並且探索內心更加基本的「元素」：在原本水火不容外表下的彼此共通之處。",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/J6tcm1KimVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/March2023/3kTGrqEfP3kk4Udrstv4-1181x1728.jpg",
    name: "名偵探柯南 黑鐵的魚影",
    date: "2023/07/06",
    actor: "無",
    introduce:
      "為了正式啟動連結世界各地警察機構的即時影像監視器系統，各國的工程師們受邀到海洋設施「 太平洋浮標 」，卻發生了女工程師慘遭黑暗組織誘拐事件，某個紀錄重要情報的USB也不幸落入黑暗組織手中。灰原身旁也出現了黑影，悄悄逐步接近⋯",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/njFHMaUK3PY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/9bwBurgXRa3XQGIQqdV7-1080x1600.jpg",
    name: "變身少女露比",
    date: "2023/06/30",
    actor: "無",
    introduce: "靦腆害羞的16歲少女露比發現她是海怪女王的直系後代，而且從古到今都一直在對抗渴望權力的美人魚一族。而她遇到個迫切的問題：新來的轉學生雀兒喜漂亮又受歡迎，卻剛好是一隻美人魚。如果露比想要保護她最愛的人，就必須勇敢接受她真正的身分",
    viedo: '<iframe src="https://www.youtube.com/embed/mLqWF2PYhPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/GHQjeOt37ZDRGURoYouz-1080x1540.jpg",
    name: "分手的決心",
    date: "2023/06/30",
    actor: "湯唯、朴海日、李貞賢、高庚杓、朴埇佑、朴正民",
    introduce: "一起男子從山頂墜落身亡的意外，讓刑警海俊遇見死者妻子宋瑞萊。面對丈夫的死沒有特別情緒的瑞萊，不同於一般的死者家屬，這讓警方開始對她產生懷疑。",
    viedo: '<iframe src="https://www.youtube.com/embed/mKDxey05Hto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "愛情、懸疑",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/feMEw4Ds4Ru8xR0glP0J-1080x1543.jpg",
    name: "幽魂娜娜：重生",
    date: "2023/06/30",
    actor: "普萊詹塔甘、麥普蘭塔、奧拉夫史密斯",
    introduce: "馬克的妻子蒂娜身懷六甲，厄運卻悄聲降臨，一名搶匪闖入家中性侵並襲擊了她，導致肚子裡的孩子流產。正當馬克​和警方對搶匪身分一籌莫展時，蒂娜所景仰的傳說女鬼「鬼妻娜娜」回來了！全程見證的她會如何揭發真相、帶給兇手永生難忘的懲罰",
    viedo: '<iframe src="https://www.youtube.com/embed/rpME22Npr6g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "懸疑、驚悚、恐怖",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/zxCn4qyxuMT5q7r1UzRu-1080x1544.jpg",
    name: "幸運狗狗來造訪",
    date: "2023/07/21",
    actor: "拉希特榭地、桑姬塔辛格里",
    introduce: "如果運氣好，有隻狗會走進你的生命裡，偷走你的心，還改變一切。人生僅有獨居的小窩、卓別林的默片、工廠、打架、米漿糕、菸、啤酒的達馬，總認為自己是世界上最不幸的人，直到某天，幸運狗狗降臨在他的生命中。",
    viedo: '<iframe src="https://www.youtube.com/embed/Zh8QWGKA7lA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/LHtkf3Cy9LEoOtxSwAc1-1080x1539.jpg",
    name: "喵喵博物館",
    date: "2023/07/28",
    actor: "無",
    introduce: "在鳥不生蛋的荒島上過著日復一日生活的流浪貓文森，原以為會這樣平淡無奇地過著他的喵生，沒想到一場洪水之災，不僅讓他與老鼠莫瑞斯成為莫逆之交，也讓兩人意外被運送到擁有超多珍貴館藏的艾米塔吉博物館。",
    viedo: '<iframe src="https://www.youtube.com/embed/NTLsbxKvH0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/HNoAm52VQnbZyoQq14Ft-1024x1517.jpg",
    name: "巨齒鯊2：海溝深淵",
    date: "2023/08/02",
    actor: "傑森史塔森、吳京、席安娜蓋蘿莉、克里夫柯提斯",
    introduce: "傑森史塔森潛入未知水域，帶著大膽的研究團隊，潛到海底最深處進行探勘。然而，這趟探勘很快就陷入混亂；一場惡意的採礦作業威脅到他們的任務，迫使他們捲入一場高風險的生存之戰。",
    viedo: '<iframe src="https://www.youtube.com/embed/fm3jBbCzs7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/February2023/vI4oOWhpqtT1qeoyNWZY-1024x1622.jpg",
    name: "復仇狗聯盟",
    date: "2023/08/18",
    actor: "無",
    introduce: "大家都說狗狗是人類最好的朋友，但是如果有個狗主人是個大混蛋呢？如果是這樣，復仇狗聯盟就該集結了。",
    viedo: '<iframe src="https://www.youtube.com/embed/ZlX-NGUSfiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "喜劇",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/4HHYN2NMjmbUB6NnU3Er-1080x1543.jpg",
    name: "謎霧莊園",
    date: "2023/07/07",
    actor: "瑪姬史密斯、雷恩菲利普、麥可甘邦、克莉絲汀史考特湯瑪斯、查爾斯丹斯、傑瑞米諾頓、鮑柏巴拉班、詹姆斯威比、克勞德布拉克利、海倫米蘭、艾蜜莉華森、克里夫歐文",
    introduce: "1932年，一個英國豪門家庭邀請各路親友到鄉間別墅參加打獵會，不料，就在觥籌交錯之間，男主人竟然被殺害了！隨著調查的進行，現場的名流和僕役們不為人知的祕密陸續曝光，究竟誰才是真正的兇手呢？",
    viedo: '<iframe src="https://www.youtube.com/embed/DBkjSKoAGy8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/orPBc0O723mBKuz3yKOc-1080x1546.jpg",
    name: "快一秒的他",
    date: "2023/09/01",
    actor: "岡田將生、清原果耶、荒川良良、福室莉音",
    introduce: "原來我慢下來的每一秒，都是為了遇見你的這一天。在郵局工作的皇一邂逅彈著吉他高歌的櫻子，總是快世界一秒的男孩早一步暈船，以為終於找到真命天女，並精心安排煙火約會，隔日醒來卻腦袋一片空白，只留滿口袋的細沙，和不知為何曬得紅通通的肌膚。",
    viedo:'<iframe src="https://www.youtube.com/embed/d7caBSvH60A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "愛情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/BOrazDhFznofxkC1xlrE-1080x1600.jpg",
    name: "沙丘：第二部",
    date: "2023/11/01",
    actor: "提摩西夏勒梅、辛蒂亞、佛蘿倫絲普伊、蕾貝卡弗格森、奧斯汀巴特勒、蕾雅瑟杜、哈維爾巴登、史戴倫史柯斯嘉、喬許布洛林、戴夫巴蒂斯塔、克里斯多夫華肯、提姆布萊克尼爾森、夏綠蒂蘭普琳",
    introduce: "保羅亞崔迪騎上巨大沙蟲，獲得全新的力量，成為新的領袖。故事將探索保羅亞崔迪的偉大神祕之旅，他和荃妮（辛蒂亞 飾演）以及弗瑞曼人聯手，對毀滅他家族的陰謀者展開報復；保羅必須在他畢生摯愛與已知宇宙命運之間做抉擇，並且努力阻止只有他能預見的可怕未來。",
    viedo:'<iframe src="https://www.youtube.com/embed/ahL5yAOXjzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "科幻",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/PHi9ZA0LAOoHeUsjAS7s-1024x1461.jpg",
    name: "舞力對決：地表撐霸",
    date: "2023/06/29",
    actor: "卡爾文小子、B-Girl吉露、卡拉姆小子",
    introduce: "一對兄弟因童年一場意外導致母親離世，兩人因此種下心結漸行漸遠。弟弟班吉為了取得倫敦世界奧運錦標賽國家隊資格，前往徵選而被趕出所屬舞團。哥哥也成為他們的競爭對手一爭高下。兄弟倆透過熱愛的霹靂舞獲得慰藉，彼此的親情連結也得已修復。",
    viedo: '<iframe src="https://www.youtube.com/embed/vvkaXnqcp9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
];
// 電影圖片
let comMoviesElm = document.querySelector(".comMoviesArea");
// modal
let modalElm1 = document.querySelector("#ModalTitle");
let modalElm2 = document.querySelector(".ModalBody");

function inputInfo2() {
  let comtempHTML = ``;
  for (let n = 0; n < comMovies.length; n++) {
    comtempHTML += `<div class="movie_div" data-bs-toggle="modal" data-bs-target="#infoModal">
        <img src="${comMovies[n].img}" class="movie_img img-fluid">
        <div class="overlay" data-movie-id="${n}">
            <div class="movies_title" data-movie-id="${n}">
            <h5>${comMovies[n].name}</h5></br><p>類型：${comMovies[n].type}</p>
            <p>上映日期：${comMovies[n].date}</p>
            </div>

        </div>
    </div>`;
  }
  comMoviesElm.innerHTML = comtempHTML;
}
// modal
comMoviesElm.addEventListener("click", (event) => {
  // console.log(event.target.classList);
  if (
    event.target.classList.contains("overlay") ||
    event.target.classList.contains("movies_title") ||
    event.target.parentElement.classList.contains("movies_title")
  ) {
    // get movie id
    let movieId = event.target.dataset.movieId;
    if (!movieId) {
      movieId = event.target.parentElement.dataset.movieId;
    }
    // movie title
    modalElm1.textContent = `${comMovies[movieId].name}`;

    modalBody = `
    <div>
     <p>主演 : ${comMovies[movieId].actor}</p>
     <p>影片類型 : ${comMovies[movieId].type}</p>
     <p>上映日期 : ${comMovies[movieId].date}</p>
    </div>
    <div class="modalInfo ">
    <p>劇情簡介 : ${comMovies[movieId].introduce}</p>
    ${comMovies[movieId].viedo}</div>`;

    modalElm2.innerHTML = modalBody;
  }
});

inputInfo2();
