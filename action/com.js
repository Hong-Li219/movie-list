// 即將上映
let comMovies = [
  {
    img: "./img/com-movie1.jpg",
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
    img: "./img/com-movie2.jpg",
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
    img: "./img/com-movie3.jpg",
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
    img: "./img/com-movie4.jpg",
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
    img: "./img/com-movie5.jpg",
    name: "變身少女露比",
    date: "2023/06/30",
    actor: "無",
    introduce: "靦腆害羞的16歲少女露比發現她是海怪女王的直系後代，而且從古到今都一直在對抗渴望權力的美人魚一族。而她遇到個迫切的問題：新來的轉學生雀兒喜漂亮又受歡迎，卻剛好是一隻美人魚。如果露比想要保護她最愛的人，就必須勇敢接受她真正的身分",
    viedo: '<iframe src="https://www.youtube.com/embed/mLqWF2PYhPE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    type: "卡通動畫",
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
