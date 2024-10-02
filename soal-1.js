"use strict"

const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin
})

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim())

  main()
})

function readLine() {
  return inputString[currentLine++]
}

function main() {
  const n = parseInt(readLine())
  const families = readLine().split(" ").map(Number)

  if (families.length !== n) {
    console.log("Input must be equal with count of family")
    return
  }

  let buses = 0
  let i = 0

  families.sort((a, b) => b - a)

  while (i < families.length) {
    if (families[i] === 4) {
      buses++
      i++
    } else if (i + 1 < families.length && families[i] + families[i + 1] <= 4) {
      buses++
      i += 2
    } else {
      buses++
      i++
    }
  }

  console.log(`Minimum bus required is: ${buses}`)
}
