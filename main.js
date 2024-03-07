
const img_list = document.getElementById("img_list");

let CurentChap = 1;
OpenChapter(fileURL, CurentChap);

function OpenChapter(url_, num_chap_) {
  my_url = url_ + `chap_${num_chap_}/`;
  img_list.innerHTML = "";
  for (let k = 1; k <= Chapters[CurentChap].NumOfImg; k++) {
    CreateImg(my_url, k);
  }
}

function CreateImg(url_, num_) {
  img_url = url_ + NumToStr(num_, 4) + ".jpg";
  console.log(img_url);
  img_list.innerHTML += 
  `<img src="${img_url}" alt="">`;
}

function NumToStr(number_, num_let_) {
  answer = String(number_);
  for (let ind_ = 1; ind_ <= num_let_ - String(number_).length; ind_++) {
    answer = "0" + answer;
  }
  return answer;
}

function ChapCommand(cm_) {
  if (cm_ === "next") {
    if (CurentChap < Chapters.length - 1) {
      CurentChap++;
      OpenChapter(fileURL, CurentChap);
    }
  }
  if (cm_ === "previous") {
    if (CurentChap > 1) {
      CurentChap--;
      OpenChapter(fileURL, CurentChap);
    }
  }
}