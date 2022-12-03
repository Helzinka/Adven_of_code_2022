import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n").map((line) => line.split(" "))

const result = {
	A: {
		X: 3,
		Y: 4,
		Z: 8,
	},
	B: {
		X: 1,
		Y: 5,
		Z: 9,
	},
	C: {
		X: 2,
		Y: 6,
		Z: 7,
	},
}

let count = 0

for (const [x, y] of input) {
	let res = result[x][y]
	count += res
}

console.log(count)
