const title = document.querySelector("div.hello:first-child h1");


console.dir(title)

function handleTitleClick() {
    if (title.style.color == "blue"){
        title.style.color = "red"
    } else {
        title.style.color = "blue"
    }
    
    console.log("title was clicked!")
}

title.addEventListener("click", handleTitleClick)

console.dir(title)