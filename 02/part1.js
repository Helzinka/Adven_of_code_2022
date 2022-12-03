import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n").map((line) => line.split(" "))

const result = {
	X: {
		A: 4,
		B: 1,
		C: 7,
	},
	Y: {
		A: 8,
		B: 5,
		C: 2,
	},
	Z: {
		A: 3,
		B: 9,
		C: 6,
	},
}

let count = 0

for (const [x, y] of input) {
	let res = result[y][x]
	count += res
}

console.log(count)
