
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

  var firstClick = secondClick = null;

  var cellIdOne = null;
  var cellIdTwo = null;

  var cells = document.getElementsByTagName("li");
  function shuffle (cells) {
    var cellsLength = cells.length
    var index
    var temp
    //while there are elements in the array
    while (cellsLength > 0) {
      //picking a random index
      index = Math.floor(Math.random() * cellsLength);

      //Decrease cellsLength by 1
      cellsLength--;

      //And swap the last element with it
      temp = cells[cellsLength];
      cells[cellsLength] = cells[index];
      cells[index] = temp;

    }

    return cells
  }
  for(i=0; i<cells.length;i++){
    cells[i].addEventListener("click", showValues);
  }
  

  function showValues(){
    if (counter % 2) { // first click
      firstClick = event.target
      console.log(firstClick)
      cellIdOne = event.target.getAttribute("data-value")
      event.target.innerText = cellIdOne;
      console.log("First turn")
      console.log(cellIdOne)
    } else { // second click
      secondClick = event.target
      console.log(secondClick)
      cellIdTwo = event.target.getAttribute("data-value")
      event.target.innerText = cellIdTwo;
      console.log("Second turn")
      console.log(cellIdTwo)


      check(cellIdOne, cellIdTwo)
    }
    counter++
    //create a variable that will get the data number of the cell 
    //that's clicked
  }

  function check(cellIdOne, cellIdTwo) {
    if (cellIdOne == cellIdTwo) {
      
      // your code here
      $(firstClick).fadeOut()
      $(secondClick).fadeOut()
      
    } else {
      $(firstClick).text($(firstClick).data("cell-id"))
      $(secondClick).text($(secondClick).data("cell-id"))
      console.log("No match!")
    }
  }


  function newBoard(){
    tiles_flipped = 0;
    var output = '';
    memory_array

  }

  shuffle()

});


