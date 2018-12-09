console.log("test");

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
    var namePar = document.createElement("p")
    var nameNode = document.createTextNode(name[i]);
    namePar.appendChild(nameNode);
    nameDiv.appendChild(namePar);
  }
}
nameRequest.send();

function showDate(){
//datejs
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
  console.log(today);
  console.log(day);
  var pDiv = document.getElementById("pDate");
  console.log(pDiv);
  pDiv.innerHTML += (day + ", " + today);
}
window.onload = showDate;


function getNews(){
  var newsRequest = new XMLHttpRequest();
  newsRequest.open("GET", "https://api.nau.ch/sitemap", true);

  newsRequest.onreadystatechange = function() {
    //console.log(this.response);
    var xmlNews = this.responseXML;
    //console.log(xmlNews);
    var newsCollection = xmlNews.getElementsByTagName('news:title');
    var newsTitle = xmlNews.getElementsByTagName('news:title');
    var newsURL = xmlNews.getElementsByTagName('loc');

  //  console.log(newsTitle);

  //  console.log(url);
  //  console.log(url[0]);
    newsDiv = document.getElementById("divNews");
console.log(newsTitle[i]);
    for(var i = 0; i<newsCollection.length; i++){
      var newsTitlePar = document.createElement("p")
      var newsTitleNode = document.createTextNode(newsTitle[i]);
      newsTitlePar.appendChild(newsTitleNode);
      newsDiv.appendChild(newsTitlePar);
    }
  };

newsRequest.send();

}
window.onload = getNews;
//http://www.geonames.org/export/ws-overview.html
// https://github.com/datejs/Datejs
