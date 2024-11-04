const container = document.querySelector("#container");

let i = 1;
const gridWidth = (container.offsetWidth - container.)/16;
// const gridHeight = container.offsetHeight/16;
console.log(gridWidth);
while(i <=16*16){
    const gridBox = document.createElement("div");
    gridBox.textContent = i;
    
    // gridBox.style.width = (`${gridWidth}px`);
    gridBox.setAttribute("style", `width: ${gridWidth}px;`);
    // gridBox.style.height = (gridHeight +"px");
    container.appendChild(gridBox);
    ++i;
}