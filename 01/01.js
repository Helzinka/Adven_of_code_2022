import fs from "fs"

fs.readFile("./input.txt", "utf8", (err, data) => {
	if (err) {
		throw err
	}
	const arr = data.split(/\r?\n/)

	let third = [0, 0, 0]
	let count = 0

	for (let i = 0; i < arr.length; i++) {
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
})
