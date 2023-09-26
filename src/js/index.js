function togglemode() {
  const html = document.body
  html.classList.toggle("light")

  //if(body.classList.contains('light')) {
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "src/assets/Avatar-escuro.png")
  } else {
    img.setAttribute("src", "src/assets/avatar-claro.png")
  }
}
