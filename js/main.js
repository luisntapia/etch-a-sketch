"use strict";

const sketchpad = document.querySelector("#sketchpad");
const sketchpadStyles = getComputedStyle(sketchpad);

let rows = 16;
let columns = 16;

let totalSquares = getTotalSquares(rows, columns);

let sketchpadWidth = sketchpadStyles.width;
let sketchpadHeight = sketchpadStyles.height;

const sketchpadBorder = sketchpadStyles.border;
const sketchpadBorderPxStr = findPxValue(sketchpadBorder);
const sketchpadBorderPxNum = getPxNum(sketchpadBorderPxStr);

let lineColor = getRGB(0, 0, 0);

let squareDivWidth =
  (getPxNum(sketchpadWidth) - sketchpadBorderPxNum * 2) / columns;
let squareDivHeight =
  (getPxNum(sketchpadHeight) - sketchpadBorderPxNum * 2) / rows;

for (let i = 0; i < totalSquares; i++) {
  createSquareDiv(
    sketchpad,
    getUnitStr(squareDivHeight, "px"),
    getUnitStr(squareDivWidth, "px")
  );
}

const squareDivs = document.querySelectorAll(".square-div");

squareDivs.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.background = lineColor;
  });
});

function createSquareDiv(node, height, width) {
  const squareDiv = document.createElement("div");
  squareDiv.classList.add("square-div");
  squareDiv.style.cssText = `height: ${height}; width: ${width}`;
  node.appendChild(squareDiv);
}

function getTotalSquares(rows, columns) {
  return rows * columns;
}

function getPxNum(str) {
  return +str.slice(0, -2);
}

function getUnitStr(num, unit) {
  return `${num}${unit}`;
}

function getRGB(num1, num2, num3) {
  return `rgb(${num1}, ${num2}, ${num3})`;
}

function findPxValue(cssRule) {
  const items = cssRule.split(" ");
  for (let i = 0; i < items.length; i++) {
    const lastTwoChars = items[i].slice(-2);
    const firstChars = items[i].slice(0, -2);
    if (lastTwoChars === "px" && items[i].length > 2 && +firstChars !== NaN) {
      return items[i];
    }
  }
}
