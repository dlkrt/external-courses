profile.onclick = function () {
  let elem = document.querySelector('.profile .content'),
    arrow = document.querySelector('.profile .user-menu');
  if (elem.style.display === 'block') {
    elem.style.display = 'none';
    arrow.style.transform = 'rotate(0)';
  } else {
    elem.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  }
};