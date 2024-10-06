var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var images = document.querySelector(".img1");
images.setAttribute("src", "./images/dice".concat(randomNumber1, ".png"));
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image = document.querySelector(".img2");
image.setAttribute("src", "./images/dice".concat(randomNumber2, ".png"));

var text = document.querySelector("h1");
if (randomNumber1 == randomNumber2) {
  text.textContent = "Draw!";
} else if (randomNumber1 < randomNumber2) {
  text.textContent = "Player2 Wins!🚩";
} else {
  text.textContent = "🚩Player1 Wins!";
}
