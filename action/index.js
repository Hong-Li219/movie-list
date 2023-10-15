// 精選圖片
const movies = [
  // 所有遷入電影的內容
  {
    movieImg:
      "./img/demo-movie1.jpg",
  },
  {
    movieImg:
      "./img/demo-movie2.jpg",
  },
  {
    movieImg:
      "./img/demo-movie3.jpg",
  },
  {
    movieImg:
      "./img/demo-movie4.jpg",
  },
  {
    movieImg:
      "./img/demo-movie5.jpg",
  },
  {
    movieImg:
      "./img/demo-movie6.jpg",
  },
  {
    movieImg:
      "./img/demo-movie7.jpg",
  },
  {
    movieImg:
      "./img/demo-movie8.jpg",
  },
];
const specialMovies = document.querySelector("#specialMovies"); // 欲加入內容的父元素

let originMovies = []; // 宣告一空陣列
function initialMovies() {
  // 將電影內容插入空陣列中
  for (let n = 0; n < 5; n++) {
    originMovies.push(movies[n]); // 在空陣列依序放入第n個電影內容
  }
  putMovies(originMovies); // 呼叫function putMovies，將有完整內容的陣列顯示在畫面上
}
function putMovies(originMovies) {
  // 將有完整內容的陣列顯示在畫面上
  let tempHtml = ``; // 宣告一空變數暫存欲加入的ＨTML元素
  for (let n = 0; n < originMovies.length; n++) {
    tempHtml += `<div class="card m-2" >
        <img src="${originMovies[n].movieImg}" class="card-img-top h-100 img-fluid rounded">
        </div>`;
  }
  specialMovies.innerHTML = tempHtml; // 在目標父元素中插入暫存的元素內容
}
initialMovies(); // 將初始電影內容顯示在畫面上
let curIndexN = 5; // 宣告變數存放下一部電影在movies的位置
let curIndexP = 7; // 宣告變數存放上一部電影在movies的位置
function updateMovieNext() {
  // 點選next時更新電影資訊
  originMovies.shift(); // 移除陣列的第一筆電影
  originMovies.push(movies[curIndexN]); // 在陣列加入最後一筆位置位於5的電影內容（第六部電影）
  if (curIndexN == movies.length - 1) {
    // 當加入的電影內容為movies的最後一筆資料
    curIndexN = 0; // 則將位置歸零（第一部電影）
  } else {
    curIndexN++; // 繼續添加後一筆電影內容
  }
  if (curIndexP == movies.length - 1) {
    // 更新pre的電影資料，// 當電影內容為movies的最後一筆資料
    curIndexP = 0; // 將資料回復成第一筆
  } else {
    curIndexP++; // 更新為下一筆
  }
  putMovies(originMovies); // 顯示更新完的陣列電影內容顯示在畫面上
}

function updateMoviePre() {
  originMovies.pop();
  originMovies.unshift(movies[curIndexP]);
  if (curIndexP == 0) {
    curIndexP = movies.length - 1;
  } else {
    curIndexP--;
  }
  if (curIndexN == 0) {
    curIndexN = movies.length - 1;
  } else {
    curIndexN--;
  }
  putMovies(originMovies);
}

// color mode toggle
// const colorSwitch = document.querySelector("#colorSwitch");
// colorSwitch.addEventListener("click", (event) => {
//   const body = document.querySelector("body");
//   方法一;
//   if (event.target.checked) {
//     // bg - > white
//     // body.classList.toggle("bg-color-light");
//     body.classList.add("bg-color-light");
//   } else {
//     // bg -> black
//     body.classList.remove("bg-color-light");
//   }
//   方法二;
//   body.classList.toggle("ch-body-color");
// });
