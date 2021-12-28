"use strict";

const sketchpad = document.querySelector("#sketchpad");
const sketchpadStyles = getComputedStyle(sketchpad);

let rows = 16;
let columns = 16;

let totalSquares = getTotalSquares(rows, columns);

let sketchpadWidth = sketchpadStyles.width;
let sketchpadHeight = sketchpadStyles.height;

let squareDivWidth = getPx(sketchpadWidth) / columns;
let squareDivHeight = getPx(sketchpadHeight) / rows;

for (let i = 0; i < totalSquares; i++) {
  createSquareDiv(
    sketchpad,
    getUnitStr(squareDivHeight, "px"),
    getUnitStr(squareDivWidth, "px")
  );
}

function createSquareDiv(node, height, width) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("square-div");
  squareDiv.setAttribute("style", `height: ${height}; width: ${width}`);
  node.appendChild(squareDiv);
}

function getTotalSquares(rows, columns) {
  return rows * columns;
}

function getPx(str) {
  return +str.slice(0, -2);
}

function getUnitStr(num, unit) {
  return `${num}${unit}`;
}
