window.addEventListener("mousemove", (event) => {
    let dot = document.createElement("div");
    dot.setAttribute("class", "dot");
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot)
    
});