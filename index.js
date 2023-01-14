document.querySelector('input').addEventListener('input', e => document.getElementById('size1').innerText = e.target.value );

document.querySelector('input').addEventListener('input', e => document.getElementById('size2').innerText = e.target.value );




const container = document.getElementById("container");

// make div grids 
function makeRows(row, col) {

  container.style.setProperty('--grid-rows', row);
  container.style.setProperty('--grid-cols', col);

  for (i = 0; i < (row * col ); i++) {
    let cell = document.createElement("div");
    // cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};


function colorPicker(){

}


// click and move mouse on grid to color each grid tile
function mouseEvent(){

  const colorPicker = document.querySelector('#input-color');

  let color = colorPicker.value;

  colorPicker.addEventListener('change', function() {
    color = colorPicker.value
  });
   let mousePressedDown;

$(document).mousedown(function() {
  mousePressedDown = true;      
})
.mouseup(function() {
  mousePressedDown = false;    
});

$(".grid-item").mouseover(function(){
  if(mousePressedDown) {       
     $(this).css({background: color});
  }
});

}




let row = 12
let col = 12

makeRows(row, col);


// change pixel size , remake grid 
function getSize(){

  let row =   document.getElementById('size1').innerText
  let col =   document.getElementById('size2').innerText

  $("div").remove(".grid-item");
  makeRows(parseInt(row), parseInt(col) );

   mouseEvent()

}

mouseEvent();