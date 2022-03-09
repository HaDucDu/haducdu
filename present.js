
var to = '';
var gift_url = 'https://www.facebook.com/100024462135244/videos/7106103482794209/';
var gift_image_url = 'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/271953833_1097696227437809_1805307527299740263_n.png?stp=dst-jpg&_nc_cat=110&ccb=1-5&_nc_sid=8631f5&_nc_ohc=dpkxQ4p13PkAX_iis6_&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8j5Ev9VSaA1_2G7VoI64pxxlp5jig3PYRq2rQA-caUZw&oe=622AAF40';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

