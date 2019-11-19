function debounce(func, delay) {
  let timerId;
  return function () {
    if (timerId) clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this);
      timerId = null;
    }, delay);
  }
}

function updateData() {
  document.querySelector('.response').innerText = document.querySelector('.search-input').value;
}

document.querySelector('.search-input').addEventListener('input', debounce(updateData,500));