function randomColor() {
    const p = Math.floor(Math.random() * 256);
    const q = Math.floor(Math.random() * 256);
    const r = Math.floor(Math.random() * 256);
    return `rgb(${p}, ${q}, ${r})`;
}

document.getElementById("btn").addEventListener("click", function () {
    document.body.style.backgroundColor = randomColor();
});