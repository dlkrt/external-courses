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
  document.getElementById('response').innerText = document.getElementById('searchInput').value;
}

searchInput.oninput = debounce(updateData,500);