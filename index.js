const container = document.getElementById("container");
const colorPicker = document.querySelector('#input-color');
let color = colorPicker.value;
let isMouseDown = false;

// make div grids 
function makeRows(row, col) {
  container.style.setProperty('--grid-rows', row);
  container.style.setProperty('--grid-cols', col);
  
  for (i = 0; i < (row * col ); i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

// change pixel size , remake grid 
function getSize(){
  let row =   document.getElementById('size1').innerText;
  let col =   document.getElementById('size2').innerText;

  $(".grid-item").remove();
  makeRows(parseInt(row), parseInt(col));
}

colorPicker.addEventListener('change', function() {
  color = colorPicker.value
});

container.addEventListener('mousedown', e => {
  isMouseDown = true;
});

container.addEventListener('mousemove', e => {
  if (isMouseDown && e.target.classList.contains("grid-item")) {
    e.target.style.background = color;
  }
});

container.addEventListener('mouseup', e => {
  isMouseDown = false;
});

container.addEventListener('touchstart', e => {
  e.preventDefault();
  if (e.target.classList.contains("grid-item")) {
    e.target.style.background = color;
  }
});

container.addEventListener('touchmove', e => {
  e.preventDefault();
  if (e.target.classList.contains("grid-item")) {
    e.target.style.background = color;
  }
});

container.addEventListener('touchend', e => {
  e.preventDefault();
});

let row = 12;
let col = 12;
makeRows(row, col);
