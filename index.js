"use strict";

const display = document.querySelector(".display");

document.addEventListener("mousemove", (event) => {
    const posX = event.pageX;
    const posY = event.pageY;

    console.log(posX, posY);

    display.style.setProperty("--varX", `${posX}px`);
    display.style.setProperty("--varY", `${posY}px`);
});