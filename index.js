var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomeImage = "dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomeImage);

// image 2 here...

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomeImage2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomeImage2);

if ( randomNumber1 > randomNumber2 ){

    document.querySelector("h1").innerHTML = "Player 1 wins!";
}

else if ( randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = "Player 2 wins!";

}

else {
    document.querySelector("h1").innerHTML = "Its a tie!";

}


function changeText() {
    document.getElementById("text").innerHTML = "Second Text";
  }
  
  function refreshPage() {
    // window.location.href = window.location.href;
    location.reload();
  }
  