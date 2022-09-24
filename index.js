const container = document.getElementById("container");

function makeRows(row, col) {
  container.style.setProperty('--grid-rows', row);
  container.style.setProperty('--grid-cols', col);
  for (i = 0; i < (row * col); i++) {
    let cell = document.createElement("div");
   //  cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(12, 12);




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


   