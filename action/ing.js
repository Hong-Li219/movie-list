// 上映中
let ingMovies = [
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/January2023/68OHgsKumNGGBoFm2fUX-1080x1565.jpg",
    name: "關於我和鬼變成家人的那件事",
    date: "2023/02/10",
    actor: "蔡振南、馬念先、許光漢、庹宗華、林柏宏、王淨",
    length: "2小時10分鐘",
    introduce:
      "恐同男警吳明翰，誤撿地上紅包，沒想到紅包裡的對象是個男的！被迫男男冥婚的明翰，一路衰到底，就連警花林子晴埋線已久的緝毒案，都被他搞砸。為了挽救危機，即使人鬼殊途也要和鬼老公毛毛攜手跨界追兇，一場荒謬絕倫、笑中帶淚的旅程就此展開！",
    age: "輔12級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/01x0ciUX0y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "喜劇",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/March2023/Gi2xZHkA7hhDcsKUPJ1c-1080x1542.jpg",
    name: "捍衛任務4",
    date: "2023/03/22",
    actor:
      " 基努李維、甄子丹、比爾史卡斯加德、勞倫斯費許朋、真田廣之、史考特艾金斯、克藍西布朗",
    length: "2小時49分鐘",
    introduce:
      "約翰維克（基努李維 飾）經歷上集的事件後，繼續與驅逐他的殺手組織「高桌會」展開對抗，隨著懸賞金額的不斷飆升，約翰維克將迎來他殺手生涯最強大的對手...",
    age: "限制級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/U2Z2nyoBC6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/1DMmx4Rxm7Pc6ocDazZD-1080x1543.jpg",
    name: "這裡沒有熊",
    date: "2023/06/16",
    actor: "賈法潘納希、米娜卡瓦尼",
    length: "1小時46分鐘",
    introduce:
      "伊朗電影導演賈法潘納希被政府限制禁拍電影，他利用遠端遙控的方式指導演員和劇組人員，繼續拍攝電影。潘納希也因為遠端執導影片的過程中拍攝一張照片，捲入一樁婚姻糾紛之中，引發當地居民的躁動。在他最後決定離開此地時，許多問題卻接踵而來...",
    age: "保護級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/BulLbftFBhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/o3l5lTKdVsUjBoFCj5fn-1080x1541.jpg",
    name: "蜘蛛人：穿越新宇宙",
    date: "2023/06/13",
    actor: "無",
    length: "2小時20分鐘",
    introduce:
      "這位紐約布魯克林的全職社區英雄邁爾斯摩拉斯，將與女蜘蛛人關史黛西聯手穿梭多元宇宙，展開一段史詩般的冒險。但是當他發現其他蜘蛛人對於自身存在的執著，而且在面對威脅意見紛紛時，邁爾斯必須找到自己的定位，並且拯救他所愛的人。",
    age: "保護級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/hP1n0LArUZg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/April2023/R6MwzV25O7ouHfQThS8k-1080x1600.jpg",
    name: "閃電俠",
    date: "2023/06/14",
    actor: "麥可夏儂、米高基頓、薩莎卡勒、伊薩米勒",
    length: "2小時24分鐘",
    introduce:
      "貝瑞使用超能力回到過去，想要改變已發生的事件，卻衝擊了時空秩序，也讓他受困於另一個時空。在這個時空中，回歸的薩德將軍正威脅著毀滅世界，但卻沒有超級英雄可以求助，除非貝瑞能說服一位退休的蝙蝠俠重現江湖，解救一位被監禁的氪星人...",
    age: "保護級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/6xRRn44sw5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/5AJrF8mgGEol8p8X1QaW-500x714.jpg",
    name: "BLUE GIANT 藍色巨星",
    date: "2023/06/09",
    actor: "無",
    length: "1小時59分鐘",
    introduce: "住在仙台的高中生・宮本大（山田裕貴 配音）深受爵士樂吸引，與從小就將一切獻給爵士樂的雪祈、以及初學者玉田，以在日本最好的爵士樂俱樂部表演並改變日本爵士樂風格為目標，盡全力投入在音樂活動之中。",
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/sPIOO3Co0vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/Z5ZSSQjySC1ImGK5wp7L-1080x1542.jpg",
    name: "我要復仇",
    date: "2023/06/09",
    actor: " 宋康昊、申河均、裴斗娜、林志恩、柳昇範",
    length: "2小時1分鐘",
    introduce: "柳先天失聰，姊姊是柳生命中的唯一摯愛。東鎮白手起家，女兒是他生命中最重要的唯一。失去所愛的兩個男人陷入了瘋狂復仇漩渦之中！",
    age: "限制級",
    viedo: '<iframe src="https://www.youtube.com/embed/JCENPUnoYog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "犯罪、懸疑、驚悚",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/smPPAGfWl5nXIuQ65Iur-1080x1542.jpg",
    name: "南方，寂寞鐵道",
    date: "2023/06/09",
    actor: "無",
    length: "1小時45分鐘",
    introduce: "台灣早年曾經有綿密且多元的鐵路系統，甚至曾經被稱為鐵道王國，許多城鎮的聚落發展幾乎都是沿著鐵道而成形。導演用五年多的拍攝時間，挖掘當年興建這段鐵路的艱辛過程，和前線鐵道員父子傳承守護鐵道的故事。",
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/GpeAeJsWtLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "紀錄片",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/mcTYDVF7isxgOO9uCPEh-1080x1543.JPG",
    name: "愛情停損點",
    date: "2023/06/09",
    actor: "吉多卡普里諾、艾琳娜蕾多娜希奇、利貝羅德里恩佐",
    length: "1小時49分鐘",
    introduce: "愛麗絲和托馬索是一對交往多年的情侶，當他們邀請朋友們到家裡共進晚餐時，大家以為兩人要宣布結婚，沒想到卻是宣布分手。",
    age: "保護級",
    viedo: '<iframe src="https://www.youtube.com/embed/h635W1BmIts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "愛情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/April2023/yR8dRQdxuxzPfcZSUyMT-500x714.jpg",
    name: "變形金剛：萬獸崛起",
    date: "2023/06/07",
    actor: "安東尼拉莫斯、多米妮可斐許巴克",
    length: "2小時7分鐘",
    introduce: "當黑暗勢力再度來臨要摧毀地球，人類的盟友博派金剛柯博文號召大黃蜂、幻影和雅希，並集結“強大金剛”中的金剛王、神鷹、犀牛和黃豹聯手奮戰，誓死抵抗最強大反派“宇宙大帝”以及恐懼金剛和掠奪金剛。",
    age: "保護級",
    viedo: '<iframe src="https://www.youtube.com/embed/Mf7n43tLrRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/June2023/ryIvRLuV3zCNDvGoX1X4-1080x1543.jpg",
    name: "為你鍾琴",
    date: "2023/06/09",
    actor: "加斯帕柏夏德、吉妮楊森",
    length: "1小時26分鐘",
    introduce: '居住在義大利小鎮的製琴大師加斯帕柏夏德，希望在退休之前，打造一把足以媲美「史特拉底瓦里名琴」的小提琴，並將該琴贈送給心儀已久的提琴女神吉妮楊森，作為他製琴人生的終結代表作。',
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/WvIFAVSpABM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/April2023/A0fPKGtRZxCWLqlUF8LV-1080x1539.jpg",
    name: "豪門心計",
    date: "2023/06/02",
    actor: "羅蕾卡拉米、朵莉亞緹莉兒、多明妮克布蘭、賈克韋伯、蘇珊克雷蒙、塞萊斯特布倫奎爾、維羅妮卡魯吉亞莦菈",
    length: "2小時03分鐘",
    introduce: "在魚罐頭工廠上班的史蒂芬，某天意外發現她竟是富商瑟傑的親生女兒，還突然被介紹入住到瑟傑家...",
    age: "輔15級",
    viedo: '<iframe src="https://www.youtube.com/embed/EELVdqssZBs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/z1qmfVG9ZY9DpDhEOeXL-1080x1543.JPG",
    name: "犯罪都市3",
    date: "2023/06/02",
    actor: "馬東石、李浚赫、青木崇高、李凡秀、金珉才、高圭弼",
    length: "1小時45分鐘",
    introduce: "在解決越南綁架案件的7年後，「怪物刑警」馬錫道與新隊員一同調查殺人案件。調查過程中，馬錫道發現此案與新興毒品有關...",
    age: "輔15級",
    viedo: '<iframe src="https://www.youtube.com/embed/JXrbJEYTISw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "犯罪、動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/LrCUi1XZJcsHswfiewjm-1984x2835.jpg",
    name: "原罪犯",
    date: "2023/06/02",
    actor: "崔岷植、劉智泰 姜惠貞、柳演錫、尹珍序",
    length: "2小時00分鐘",
    introduce: "吳大秀是個平凡無奇的生意人，某天卻突然被人綁走，醒來時他發現自己身在一間密室中，房間裡只有一臺電視。",
    age: "限制級",
    viedo: '<iframe src="https://www.youtube.com/embed/juM434CNMJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/May2023/44d6AqxxhsMG32FfgZDX-1080x1541.jpg",
    name: "催眠狙擊",
    date: "2023/06/02",
    actor: "班艾佛列克、艾莉絲布拉加、威廉費奇納",
    length: "1小時33分鐘",
    introduce: "剛復職的警探丹尼洛克在調查一宗銀行搶案的過程中，發現一名具有強大催眠能力的危險男子，竟和自己日前離奇失蹤的女兒有關。在催眠師黛安娜（艾莉絲布拉加飾）協助下，他嘗試前往追查並拆解箇中謎團，反而讓他們被該男子追殺而身陷險境..",
    age: "輔15級",
    viedo: '<iframe src="https://www.youtube.com/embed/Y-xAp4wMPg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/April2023/jVMhn1ab1OjG0y51bdUv-1080x1543.jpg",
    name: "坎達哈行動",
    date: "2023/05/26",
    actor: "傑瑞德巴特勒、雷哈拉蒂安、阿里札勒、奧莉維亞邁巴雷特、妮娜圖桑懷特",
    length: "1小時59分鐘",
    introduce: "中情局幹員湯姆（傑瑞德巴特勒 飾）在一項臥底行動曝光後，遭到阿富汗的精銳部隊和外國間諜的追捕和獵殺。深陷敵區的湯姆必須趕在時限內，和他的翻譯殺出一條血路，前往位於坎達哈的撤離地點。",
    age: "輔12級",
    viedo: '<iframe src="https://www.youtube.com/embed/xgXCv4dRuuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/April2023/GyuSm9varB8vHLw989w1-1080x1600.jpg",
    name: "玩命關頭X",
    date: "2023/05/17",
    actor: "傑森摩莫亞、布麗拉森、蜜雪兒羅莉葛茲、莎莉賽隆、馮迪索",
    length: "2小時20分",
    introduce: "唐老大和他的夥伴在2011年的《玩命關頭5》一片中，除掉了惡名昭彰的巴西大毒梟赫南芮斯，並且徹底瓦解他的販毒帝國。芮斯的兒子但丁親眼目睹了那一切，而且在過去的12年之間精心策劃了一個復仇計畫，目的是要讓唐老大付出終極代價...",
    age: "輔12級",
    viedo:
      '<iframe  src="https://www.youtube.com/embed/5gcuGLJN2uU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "動作",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/March2023/C7mmJYc5Vo8aSw8QGzab-1080x1558.jpg",
    name: "超級瑪利歐兄弟電影版",
    date: "2023/04/05",
    actor: "無",
    length: "1小時32分鐘",
    introduce: "地表最強水管工超級瑪利歐兄弟正式開業！大魔王庫巴抓了一群人質並號召他的軍隊栗寶寶、慢慢龜準備大舉進攻，目標摧毀蘑菇王國；碧姬公主、奇諾比奧、瑪利歐和咚奇剛將聯手對抗大魔王庫巴。",
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/iE-BqYVfA4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/November2022/Ehl7e402ukfrGS1Ih7Mh-1080x1542.jpg",
    name: "THE FIRST SLAM DUNK 灌籃高手",
    date: "2023/06/02",
    actor: "無",
    length: "2小時4分鐘",
    introduce: "「教練，我想打籃球！」火紅32年的經典漫畫《灌籃高手》從1990年連載到1996年，人物角色為了籃球比賽揮灑熱血汗水激勵不少人骨子裡的「籃球魂」。井上雄彥首部大銀幕作品，以全新視角來創作電影，賦予每個角色新的生命。",
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/cxVo8S7Rju4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
  {
    img: "https://movies.yahoo.com.tw/i/r/w420/production/movies/March2023/OTZI8te2EdIt6DUkVcDx-1080x1542.jpg",
    name: "鏡之孤城",
    date: "2023/03/31",
    actor: "無",
    length: "1小時58分鐘",
    introduce: "就讀中學的小心，在學校遭受排擠而變得足不出戶，整天關在房間。就在某一天，房裡的鏡子突然綻放起神秘光芒...",
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/eDVpRbBWKJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
  },
];

// 電影圖片
let ingtempHTML = ``;
let ingMoviesElm = document.querySelector(".ingMoviesArea");

// Modal
let modalElm1 = document.querySelector("#ModalTitle");
let modalElm2 = document.querySelector(".ModalBody");

function inputInfo1() {
  for (let n = 0; n < ingMovies.length; n++) {
    ingtempHTML += `<div class="movie_div" data-bs-toggle="modal" data-bs-target="#infoModal">
        <img src="${ingMovies[n].img}" class="movie_img">
        <div class="overlay" data-movie-id="${n}">
            <div class="movies_title" data-movie-id="${n}">
              <h5>${ingMovies[n].name}</h5></br><p>類型：${ingMovies[n].type}</p>
              <p>分級：${ingMovies[n].age}</p><p>時長：${ingMovies[n].length}</p>
            </div>
        </div>
    </div>`;
  }
  ingMoviesElm.innerHTML = ingtempHTML;
}
// modal
ingMoviesElm.addEventListener("click", (event) => {
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
    modalElm1.textContent = `${ingMovies[movieId].name}`;

    modalBody = `
    <div>
     <p>主演 : ${ingMovies[movieId].actor}</p>
     <p>分級 : ${ingMovies[movieId].age}</p>
     <p>片長 : ${ingMovies[movieId].length}</p>
     <p>影片類型 : ${ingMovies[movieId].type}</p>
    <p>上映日期 : ${ingMovies[movieId].date}</p>
    </div>
    <div class="modalInfo ">
    <p>劇情簡介 : ${ingMovies[movieId].introduce}</p>
    ${ingMovies[movieId].viedo}</div>`;

    modalElm2.innerHTML = modalBody;
  }
});

inputInfo1();
