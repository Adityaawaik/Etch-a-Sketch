const sketchArea = document.querySelector(".sketch-area");

const sketchAreaWidth = parseInt(window.getComputedStyle(sketchArea).width);

const girdSlider = document.querySelector(".grid-slider");

const sliderValue = document.querySelector(".slider-value");

const redColorBtn = document.querySelector("#red-btn");

const eraseBtn = document.querySelector("#erase-btn");

const clearAllBtn = document.querySelector("#clear-all-btn");

const colorPickerBtn = document.querySelector(".color-picker");

const colorPicker = document.querySelector(".color-picker");

sliderValue.innerHTML = `Value : ${girdSlider.value}`;
girdSlider.addEventListener("change", (e) => {
  const gridNum = e.target.value;
  sliderValue.innerHTML = `Value : ${gridNum}`;
  createGrid(gridNum);
});

function createGrid(size) {
  sketchArea.innerHTML = "";
  sketchArea.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  sketchArea.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  const boxSize = sketchAreaWidth / size;

  for (let index = 0; index < size ** 2; index++) {
    const gridBox = document.createElement("div");
    gridBox.className = "grid-box";
    gridBox.style.width = `${boxSize}px`;
    gridBox.style.height = `${boxSize}px`;
    sketchArea.append(gridBox);
  }
  const allGrid = document.querySelectorAll(".grid-box");
  paintSketch(redColorBtn, allGrid, "red");
  paintSketch(eraseBtn, allGrid, "white");
  clearAllGrid(clearAllBtn, allGrid, "white");
  colorPicker.addEventListener("change", (e) => {
    const selectedColor = e.target.value;
    allGrid.forEach((eachBox) => {
      eachBox.addEventListener("mouseover", () => {
        eachBox.style.backgroundColor = selectedColor;
      });
    });
  });
}

createGrid(27);

function paintSketch(colorBtn, gridBox, color) {
  colorBtn.addEventListener("click", () => {
    gridBox.forEach((eachBox) => {
      eachBox.addEventListener("mouseover", () => {
        eachBox.style.backgroundColor = color;
      });
    });
  });
}

function clearAllGrid(colorBtn, gridBox, color) {
  colorBtn.addEventListener("click", () => {
    gridBox.forEach((eachBox) => {
      eachBox.style.backgroundColor = color;
    });
  });
}
