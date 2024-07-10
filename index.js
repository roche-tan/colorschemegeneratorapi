document.getElementById("color-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const colorSchemeContainer = document.getElementById(
    "color-scheme-container"
  );

  const hexColor = document.getElementById("base-color").value.substring(1); //substring(1) to remove '#'
  const mode = document.getElementById("scheme-selection").value;
  const numColors = 5;

  const url = ` https://www.thecolorapi.com/scheme/?hex=${hexColor}&mode=${mode}&count=${numColors} `;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      colorSchemeContainer.innerHTML = ""; // cleans previous scheme
      data.colors.forEach((color) => {
        const colorDiv = document.createElement("div"); // create new div for each color
        colorDiv.className = "color-box"
        colorDiv.style.backgroundColor = color.hex.value;
        
        colorSchemeContainer.appendChild(colorDiv);
      });
    });
});
