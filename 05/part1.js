import fs from "fs"

let raw = fs.readFileSync("./input.txt", "utf-8").toString().trim()
let input = raw.split("\n").map((e) => e.match(/\d+/g))

let tab = {
	1: ["Z", "P", "M", "H", "R"],
	2: ["P", "C", "J", "B"],
	3: ["S", "N", "H", "G", "L", "D", "C"],
	4: ["F", "T", "M", "D", "Q", "S", "R", "L"],
	5: ["F", "S", "P", "Q", "B", "T", "Z", "M"],
	6: ["T", "F", "S", "Z", "B", "G"],
	7: ["N", "R", "V"],
	8: ["P", "G", "L", "T", "D", "V", "C", "M"],
	9: ["W", "Q", "N", "J", "F", "M", "L"],
}

// let tab = {
// 	1: ["Z", "N"],
// 	2: ["M", "C", "D"],
// 	3: ["P"],
// }

const transport = (move, from, to) => {
	let crate = tab[from].splice(-move)
	tab[to] = tab[to].concat(crate.reverse())
}
for (const n of input) {
	transport(n[0], n[1], n[2])
}

console.log(
	Object.keys(tab)
		.map((e) => tab[e].reverse()[0])
		.join("")
)
