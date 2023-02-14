function determineHeightAndThenDrawPyramid(){
  let x = document.getElementById("height").value;
  printPyramid(x);
}
function printPyramid(height) {
  space = ".";
  brick = "#";
    for (i=1; i<=height; i++){
      row = "";
      spaces = height - i;
      row = row + space.repeat(spaces);
      row = row + brick.repeat(i) + "#";
      const para = document.createElement("p");
      const node = document.createTextNode(row);
      para.appendChild(node);
      const element = document.getElementById("pyramid");
      element.appendChild(para);
    }
}
