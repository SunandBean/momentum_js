const player = {
    name: "nico",
    points: 10,
    handsome: false,
    fat: true,
}

console.log(player)
console.log(player.name)
console.log(player["name"])

player.fat = false;
console.log(player)

player.lastName = "chicken";
console.log(player)