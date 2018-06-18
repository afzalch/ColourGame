var numOfSquares = 6;
var colours = generateRandomColours(numOfSquares);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
colourDisplay.textContent = pickedColour;
var message = document.getElementById("message");
var newColour = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

for(var i = 0; i < modeBtn.length; i++){
  modeBtn[i].addEventListener("click",function(){
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");

    this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
    // if(this.textContent ==="Easy"){
    //   numOfSquares = 3;
    // }
    // else {
    //   numOfSquares = 6;
    // }

      reset();

    });
}

// pick new Colours
//pick a new pickedColour
//update page to reflect changes
function reset(){
  colours = generateRandomColours(numOfSquares);

  // Pick new colour and change displayed colour
  pickedColour = pickColour();
  colourDisplay.textContent = pickedColour;

  // Change colours for squares on page
  for(var i = 0; i < squares.length;i++){
    if(colours[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  newColour.textContent = "New Colour";
  message.textContent = "";
}
// easyBtn.addEventListener("click",function(){
//   numOfSquares = 3;
//   colours = generateRandomColours(numOfSquares);
//   hardBtn.classList.remove("selected");
//   this.classList.add("selected");
//   pickedColour = pickColour();
//   colourDisplay.textContent = pickedColour;
//   for(var i = colours.length; i < squares.length; i++){
//     squares[i].style.display = "none";
//   }
// });
//
// hardBtn.addEventListener("click",function(){
//   var length = colours.length;
//   numOfSquares = 6;
//   colours = generateRandomColours(numOfSquares);
//   this.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   pickedColour = pickColour();
//   colourDisplay.textContent = pickedColour;
//   for(var i = length; i < squares.length; i++){
//     squares[i].style.display = "block";
//   }
// });

// New Colour/Play Again button
newColour.addEventListener("click", function(){
  reset();
});

// Change colours on square to match colours in array
for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colours[i];


  squares[i].addEventListener("click", function(){
    var clickedColour = this.style.backgroundColor;
    if (clickedColour === pickedColour){
      message.textContent = "Correct";
      changeColours(clickedColour);
      newColour.textContent = "Play Again?";
      h1.style.backgroundColor = pickedColour;
    }
    else{
      this.style.backgroundColor = "#232323";
      message.textContent = "Try Again";
    }

  });
}


function changeColours(colour){
  //change all squares colours to match given colour
  for(var i = 0; i < colours.length; i++){
    squares[i].style.backgroundColor = colour;
  }
}


function pickColour(){
  var index = Math.floor(Math.random()*colours.length);
  return colours[index];
}

function generateRandomColours(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColour());
  }
  return arr;
}

function randomColour(){
  var red = Math.floor(Math.random()*256);
  var green = Math.floor(Math.random()*256);
  var blue = Math.floor(Math.random()*256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
