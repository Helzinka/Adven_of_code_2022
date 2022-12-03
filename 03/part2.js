import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n")

let letters = []
let sample = []
let delta = 0
let count = 0

for (let a = 1; a < input.length + 1; a++) {
	if (!(a % 3) && a != 0) {
		sample.push(input.slice(delta, a))
		delta = a
	}
}

for (const a of sample) {
	for (const b of a[0]) {
		if (a[1].includes(b) && a[2].includes(b)) {
			letters.push(b)
			break
		}
	}
}

for (const a of letters) {
	if (a.charCodeAt() <= 90) {
		count += a.charCodeAt() - 38
	} else if (a.charCodeAt() >= 97) {
		count += a.charCodeAt() - 96
	}
}
console.log(count)
