fetch('https://api.abalin.net/get/today')
  .then(response => response.JSON())
  .then(data => {
    var names = data;
    document.getElementById('names').innerHTML += names['name_us'];
  })
