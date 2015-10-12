
//create 6 x 4 grid to create 24 squares
//6ul's with 4li's in each creating the grid
//give values to all corresponding li's 
//make clickEvents for all of them (onclick, onmousedown, onmouseup)
//show value on the first click
//show value on the second click
//if first value matches second value, keep them showing
//if first value doesn't match second value, reset grid
//assign random probability so each game randomizes the grid
//if I'm feeling adventurous, add a timer to record time for each player

//create arrays for all the cards/pictures on the grid

$(function() {

  // var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F',
  // 'G','G','H','H','I','I','J','J','K','K','L','L']
  var counter = 1;

  var cellIdOne = null;
  var cellIdTwo = null;

  var cells = document.getElementsByTagName("li");
  for(i=0; i<cells.length;i++){
    cells[i].addEventListener("click", showValues);
  }

  function showValues(){
    if (counter % 2) { // first click
      var firstClick = event.target
      console.log(firstClick)
      cellIdOne = event.target.getAttribute("data-value")
      event.target.innerText = cellIdOne;
      console.log("First turn")
      console.log(cellIdOne)
    } else { // second click
      var secondClick = event.target
      console.log(secondClick)
      cellIdTwo = event.target.getAttribute("data-value")
      event.target.innerText = cellIdTwo;
      console.log("Second turn")
      console.log(cellIdTwo)


      check(cellIdOne, cellIdTwo, firstClick, secondClick)
    }
    counter++
    //create a variable that will get the data number of the cell 
    //that's clicked
  }

  function check(cellIdOne, cellIdTwo, firstClick, secondClick) {
    if (cellIdOne == cellIdTwo) {
      console.log("Match!")
      // your code here
      console.log(firstClick)
      console.log(secondClick)
    } else {
      console.log("No match!")
    }
  }


  function newBoard(){
    tiles_flipped = 0;
    var output = '';
    memory_array

  }

});


