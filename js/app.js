$(function() {

  var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F',
  'G','G','H','H','I','I','J','J','K','K','L','L']
  var counter = 1;
  var gameOver = 0;

  var firstClick = secondClick = null;

  var cellIdOne = null;
  var cellIdTwo = null;

  var cells = document.getElementsByTagName("li");
  var shuffledArray = shuffle(memory_array)
  for (var i = shuffledArray.length - 1; i >= 0; i--) {
    cells[i].setAttribute("data-value", shuffledArray[i])
    cells[i].addEventListener("click", showValues)
  };

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

  function showValues(){
    if(this.innerHTML.length === 0){
      if (counter % 2) {
        this.innerHTML = "<img src='./Pics/"+this.getAttribute("data-value")+".jpg'>"
        console.log(this.innerHTML)
        firstClick = event.target
        cellIdOne = event.target.getAttribute("data-value")
      } else {
        this.innerHTML = "<img src='./Pics/"+this.getAttribute("data-value")+".jpg'>"
        console.log($(this).find("img"))
        secondClick = event.target
        cellIdTwo = event.target.getAttribute("data-value")
        
        check(cellIdOne, cellIdTwo)
      }
      counter++
    }
  }


  function check(cellIdOne, cellIdTwo) {
    if (cellIdOne === cellIdTwo) {

      $(".display-text").html("It's a match")
      gameOver++;
      
      $(firstClick).fadeOut()
      $(secondClick).fadeOut()

      setTimeout(function(){
        $(".display-text").hide("")
      }, 800);
      
    } else {

      $(".display-text").html("Not a match")

      setTimeout(function(){
        $(firstClick).empty()
        $(secondClick).empty()


        $(".display-text").html("")
      }, 800);
    }
    if(gameOver == 12) {
      alert("hey, you won!")
      location.reload();
    }
  }

});


