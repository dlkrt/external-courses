function myFetch(url, options = {method: 'get'}) {
  function fetchData(resolve, reject) {
    const oReq = new XMLHttpRequest();
    oReq.open(options.method, url, true);
    oReq.onload = function () {
      if (this.status === 200) {
        resolve(oReq.response);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      }
    };
    oReq.onerror = function() {
      reject({
        status: this.status,
        statusText: this.statusText
      });
    };
    oReq.send(options.body || '');
  }
  return new Promise(fetchData);
}

form.onsubmit = function (e) {
  e.preventDefault();
  const data = new FormData(document.getElementById('form'));
  myFetch('http://httpbin.org/post',{
    method: 'post',
    body: data
  }).then(response => {
    document.querySelector('.response').innerText = response;
  }).catch(err => {
    alert('Error: '+err.statusText)
  });
};