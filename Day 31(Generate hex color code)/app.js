let mainDiv = document.querySelector(".rough");
let mainBtn = document.querySelector("#color-code");

const generateHexColorCode = () => {
  let valuesOfColor = '0123456789abcdef';
  let hexCode = '';

  for (let index = 0; index < 6; index++) {
    let randomIndex = Math.ceil(Math.random() * valuesOfColor.length - 1);
    hexCode += valuesOfColor[randomIndex];
  }
    
  return `#${hexCode}`;
};

mainBtn.addEventListener("click" , () => {
  mainDiv.style.background = `linear-gradient(to left ,${generateHexColorCode()} , ${generateHexColorCode()})`
})


console.log(Math.random().toString(16));