import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n")

let letters = []
for (const x of input) {
	const [one, two] = [x.slice(0, x.length / 2), x.slice(x.length / 2)]
	for (const letter of one) {
		if (two.includes(letter)) {
			letters.push(letter)
			break
		}
	}
}

let count = 0
for (const y of letters) {
	if (y.charCodeAt() <= 90) {
		count += y.charCodeAt() - 38
	} else if (y.charCodeAt() >= 97) {
		count += y.charCodeAt() - 96
	}
}

console.log(count)
