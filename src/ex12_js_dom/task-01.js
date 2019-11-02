let pictures = ['./asset/pic1.jpg', './asset/pic2.jpg', './asset/pic3.jpg'];
let id = -1,
  elem = document.getElementsByClassName('slider')[0];

function domAnimate() {
  elem.animate([
    {'transform': 'scale(0)'},
    {'transform': 'scale(1)'}
  ], {
    'duration': 500
  })
}

right.onclick = function () {
  id += 1;
  if (id >= pictures.length) {
    id = 0;
  }
  domAnimate();
  elem.style = `background-image: url("${pictures[id]}")`;

};

left.onclick = function () {
  id -= 1;
  if (id < 0) {
    id = pictures.length - 1;
  }
  domAnimate();
  elem.style('slider')[0].style = `background-image: url("${pictures[id]}")`;
};

right.click();