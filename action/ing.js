// 上映中
let ingMovies = [
  {
    img: "./img/ing-movie1.jpg",
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
    img: "./img/ing-movie2.jpg",
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
    img: "./img/ing-movie3.jpg",
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
    img: "./img/ing-movie4.jpg",
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
    img: "./img/ing-movie5.jpg",
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
    img: "./img/ing-movie6.jpg",
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
    img: "./img/ing-movie7.jpg",
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
    img: "./img/ing-movie8.jpg",
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
    img: "./img/ing-movie9.jpg",
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
    img: "./img/ing-movie10.jpg",
    name: "為你鍾琴",
    date: "2023/06/09",
    actor: "加斯帕柏夏德、吉妮楊森",
    length: "1小時26分鐘",
    introduce: '居住在義大利小鎮的製琴大師加斯帕柏夏德，希望在退休之前，打造一把足以媲美「史特拉底瓦里名琴」的小提琴，並將該琴贈送給心儀已久的提琴女神吉妮楊森，作為他製琴人生的終結代表作。',
    age: "普遍級",
    viedo: '<iframe src="https://www.youtube.com/embed/WvIFAVSpABM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "劇情",
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
