const images = [
    "SUN_2752-1.jpg",
    "SUN_2911-1.jpg",
    "SUN_2981-1.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage)
