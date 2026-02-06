const bodyEl = document.querySelector("body");

// window.addEventListener("mousemove", (event) => {
//   const xPos = event.clientX;
//   const yPos = event.clientY;

//   console.log(xPos);

//   const spanEl = document.createElement("span");
//   spanEl.style.left = `${xPos}px`;
//   spanEl.style.top = `${yPos}px`;
//   const size = Math.random() * 100;
//   spanEl.style.width = size + "px";
//   spanEl.style.height = size + "px";
//   bodyEl.appendChild(spanEl);
//   setTimeout(() => {
//     spanEl.remove();
//   }, 3000);
// });

function heartDisplay() {
  const xPos = Math.floor(Math.random() * 1440);
  const yPos = Math.floor(Math.random() * 700);
  const size = Math.floor(Math.random() * 100) + 10;

  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 5000);
}

setInterval(heartDisplay, 30);
