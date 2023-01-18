var i=0;
function grid (size){
    while (i<size){
        var elem = document.createElement("div");
        elem.classList.add("box");
        const container = document.querySelector(".container");
        container.appendChild(elem);
        i++;
    }
}
grid(256);

const areas = document.querySelectorAll(".box")

areas.forEach((area) => {
  area.addEventListener('mouseover', () => {
    area.style.backgroundColor = 'magenta';
  })
})