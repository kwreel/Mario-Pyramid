let inputHeight = parseInt(prompt("What height of Pyramid do you want?"));
printPyramid(inputHeight);
function printPyramid(height) {
  space = " ";
  brick = "#";
    for (i=1; i<=height; i++){
      row = "";
      spaces = height - i;
      row = row + space.repeat(spaces);
      row = row + brick.repeat(i) + "#";
      console.log(row);
    }
}
