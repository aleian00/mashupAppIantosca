//console.log("test");

// names
var nameRequest = new XMLHttpRequest();
nameRequest.open('GET', 'https://api.abalin.net/get/today', true);
nameRequest.onload = function(){
  var nameDiv = document.getElementById("names");
  var data = JSON.parse(this.response).data;
  var names = data.name_us;
//  console.log(names);
  var name = names.split(", ");
  //console.log(name);
  for(i = 0; i < name.length; i++){
    //console.log(name[i]);
    var namePar = document.createElement("p");
    var nameNode = document.createTextNode(name[i]);
    namePar.appendChild(nameNode);
    nameDiv.appendChild(namePar);
  }
}
nameRequest.send();

function showDate(){
//datejs
  var days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  var today = new Date();
  var dd = today.getDate();
  var day = days[today.getDay()];
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  if(dd<10){
      dd='0'+dd;
  }
  if(mm<10){
      mm='0'+mm;
  }
  today = dd+'.'+mm+'.'+yyyy;
  // console.log(today);
  // console.log(day);
  var pDiv = document.getElementById("pDate");
  // console.log(pDiv);
  pDiv.innerHTML += (day + ", " + today);
}
window.onload = showDate;

// function getNews(){
//   var url = 'https://newsapi.org/v2/top-headlines?sources=bild&apiKey=413daf15ba394034a247e7a9b00fbcef';
//   var req = new Request(url);
//   fetch(req)
//       .then(function(response) {
//           console.log(response.json());
//           var newsDiv = document.getElementById("divNews");
//           var data = JSON.parse(this);
//           console.log(data);
//
//           for (var i = 0; i < response.json().result.articles; i++) {
//             response.json().result.articles[i];
//           }
//       })
// }
//
// window.onload = getNews;


var newsRequest = new XMLHttpRequest();
newsRequest.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bild&apiKey=413daf15ba394034a247e7a9b00fbcef', true);
newsRequest.onload = function(){
  var newsDiv = document.getElementById("divNews");
  var data = JSON.parse(this.response).articles;
  for (var i = 0; i < data.length; i++) {
    // console.log(data[i].title);
    var url = data[i].url
    var articleURL = document.createElement("a")
    articleURL.href=url;
  //  var titlePar = document.createElement("p");
    var titleNode = document.createTextNode(data[i].title);
    articleURL.innerHTML = data[i].title;
  //  articleURL.appendChild(titlePar);
    var newLine = document.createElement("hr");
    newsDiv.appendChild(articleURL);
    newsDiv.appendChild(newLine);
  }
  var publishDate = data[0].publishedAt;

  var date = publishDate.charAt(8)+publishDate.charAt(9)+"."+publishDate.charAt(5)
      +publishDate.charAt(6)+"."+publishDate.charAt(0)
      +publishDate.charAt(1)+publishDate.charAt(2)+publishDate.charAt(3);
      console.log(date);


  console.log(publishDate);
}
newsRequest.send();




//
// function getNews(){
//
//
//
//
//   var newsRequest = new XMLHttpRequest();
//   newsRequest.open("GET", "https://api.nau.ch/sitemap", true);
//
//   newsRequest.onreadystatechange = function() {
//     console.log(this.response);
//     var xmlNews = this.responseXML;
//     console.log(xmlNews);
//     var newsCollection = xmlNews.getElementsByTagName('news:title');
//     var newsTitle = xmlNews.getElementsByTagName('news:title');
//     var newsURL = xmlNews.getElementsByTagName('loc');
//
//     console.log(newsTitle);
//     console.log(url);
//     console.log(url[0]);
//     newsDiv = document.getElementById("divNews");
//     console.log(newsTitle[i]);
//     for(var i = 0; i<newsCollection.length; i++){
//       var newsTitlePar = document.createElement("p")
//       var newsTitleNode = document.createTextNode(newsTitle[i]);
//       newsTitlePar.appendChild(newsTitleNode);
//       newsDiv.appendChild(newsTitlePar);
//     }
//   };
//
// newsRequest.send();
// }
// window.onload = getNews;
// function getCurrentCity(location) {
//     const lat = location.coords.latitude;
//     const lon = location.coords.longitude;
//     return fetch(apis.currentWeather.url(lat, lon))
//         .then(response => response.text())
//         .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
//         .then(data => console.log(data))
// }
