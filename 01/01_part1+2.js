import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n").map((line) => line)

let third = [0, 0, 0]
let count = 0

for (let i = 0; i < input.length; i++) {
	count = count + Number(arr[i])
	if (arr[i] === "" || i >= arr.length - 1) {
		let min = Math.min(...third)
		let index = third.findIndex((e) => e <= min)

		for (let y = 0; y < third.length; y++) {
			if (count > min) {
				third[index] = count
			}
		}
		count = 0
	}
}
return third.reduce((a, b) => a + b)
