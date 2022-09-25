document.querySelector('input').addEventListener('input', e => document.getElementById('size1').innerText = e.target.value );

document.querySelector('input').addEventListener('input', e => document.getElementById('size2').innerText = e.target.value );




const container = document.getElementById("container");
function makeRows(row, col) {
  
  container.style.setProperty('--grid-rows', row);
  container.style.setProperty('--grid-cols', col);
  
  for (i = 0; i < (row * col ); i++) {
    let cell = document.createElement("div");
    // cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


// click and move mouse on grid to color each grid tile
function mouseEvent(){
  let mousePressedDown = false;  
 
$(document).mousedown(function() {
  mousePressedDown = true;      
})
.mouseup(function() {
  mousePressedDown = false;    
});

$(".grid-item").mouseover(function(){
  if(mousePressedDown) {       
     $(this).css({background:"black"});
  }
});

}

// touchdown event move over grid color

document.addEventListener('touchmove', function(e) {
    // e.preventDefault();
    var touch = e.touches[0];
   

          
    $(".grid-item").on("mouseover", function(){
      if(touch.target.className === "grid-item" ) {  
        console.log(touch.target.className )     
        $("this").css({background:"black"});
     }
    })
   
}, false);



let row = 12
let col =   12

makeRows(row, col);



function getSize(){
  
  let row =   document.getElementById('size1').innerText
  let col =   document.getElementById('size2').innerText
 
  $("div").remove(".grid-item");
  makeRows(parseInt(row), parseInt(col) );

   mouseEvent()

}




mouseEvent();


 
 
