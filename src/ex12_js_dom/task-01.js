const pictures = ['./asset/pic1.jpg', './asset/pic2.jpg', './asset/pic3.jpg'];
let id = -1,
  elem = document.getElementsByClassName('slider')[0];

function makeAnimate() {
  elem.animate([
    {'transform': 'scale(0)'},
    {'transform': 'scale(1)'}
  ], {
    'duration': 500
  })
}

nextBtn.onclick = function () {
  id += 1;
  if (id >= pictures.length) {
    id = 0;
  }
  makeAnimate();
  elem.style = `background-image: url("${pictures[id]}")`;
};

backBtn.onclick = function () {
  id -= 1;
  if (id < 0) {
    id = pictures.length - 1;
  }
  makeAnimate();
  elem.style = `background-image: url("${pictures[id]}")`;
};

nextBtn.click();