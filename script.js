import anime from "./anime.js";

var container = document.querySelector(".airplane-container");

var density = 20;
var length = window.innerHeight* 2/5;

for (var i = 0; i <= length; i += 1) {
    var angle = 0.1 * i;
    var x = density * angle;
    var y = density * angle;

    var n = 15;

    var dot = document.createElement("div");
    dot.classList.add("dot");
    container.appendChild(dot);

    var size = anime.random(5, 10);

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    dot.style.left = x + anime.random(-15, 15) + "px";
    dot.style.top = y + anime.random(-15, 15) + "px";

    dot.style.opacity = "0";
}

anime({
    loop: true,
    easing: "linear",
    opacity: [
        { value: 1, duration: 50, delay: anime.stagger(2) },
        { value: 0, duration: function () { return anime.random(500, 1500); } }
    ],
    width: { value: 2, duration: 500, delay: anime.stagger(2) },
    height: { value: 2, duration: 500, delay: anime.stagger(2) },

    targets: document.querySelectorAll(".dot"),

    translateX: {
        value: function () {
            return anime.random(-30, 30);
        },
        duration: 1500,
        delay: anime.stagger(2)
    },
    translateY: {
        value: function () {
            return anime.random(-30, 30);
        },
        duration: 1500,
        delay: anime.stagger(2)
    }
});
