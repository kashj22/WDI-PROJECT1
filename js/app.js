function shuffle (cells) {
  var cellsLength = cells.length
  var index
  var temp
  while (cellsLength > 0) {
    index = Math.floor(Math.random() * cellsLength);
    cellsLength--;
    temp = cells[cellsLength];
    cells[cellsLength] = cells[index];
    cells[index] = temp;
  }

  return cells
}

$(function() {

  var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F',
  'G','G','H','H','I','I','J','J','K','K','L','L']
  var counter = 1;

  var firstClick = secondClick = null;

  var cellIdOne = null;
  var cellIdTwo = null;

  var cells = document.getElementsByTagName("li");
  var shuffledArray = shuffle(memory_array)
  for (var i = shuffledArray.length - 1; i >= 0; i--) {
    cells[i].setAttribute("data-value", shuffledArray[i])
    cells[i].addEventListener("click", showValues)
    cells[i].innerHTML = "<img src='./img/"+shuffledArray[i]+".jpg'>"
  };



  function showValues(){
    if(this.innerHTML.length === 0){
      if (counter % 2) {
        firstClick = event.target
        cellIdOne = event.target.getAttribute("data-value")
        event.target.innerText = cellIdOne;
      } else {
        secondClick = event.target
        cellIdTwo = event.target.getAttribute("data-value")
        event.target.innerText = cellIdTwo;

        check(cellIdOne, cellIdTwo)
      }
      counter++
    }
  }


  function check(cellIdOne, cellIdTwo) {
    if (cellIdOne === cellIdTwo) {

      $(".display-text").html("It's a match")

      $(firstClick).fadeOut()
      $(secondClick).fadeOut()

      setTimeout(function(){
        $(".display-text").hide("")
      }, 1000);
      
    } else {

      $(".display-text").html("Not a match")

      setTimeout(function(){
        $(firstClick).empty()
        $(secondClick).empty()


        $(".display-text").html("")
      }, 1000);
    }
  }


  function newBoard(){
    tiles_flipped = 0;
    var output = '';
    memory_array

  }

});


