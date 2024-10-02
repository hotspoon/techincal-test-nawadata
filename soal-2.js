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

function procVowel(input) {
  const vowels = "aiueo"
  let vowelsChars = []

  for (let char of input.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsChars.push(char)
    }
  }

  return vowelsChars.join("")
}

function procConsonant(input) {
  const vowels = "aiueo"
  let consonantChars = []

  for (let char of input.toLowerCase()) {
    if (!vowels.includes(char) && char.match(/[a-z]/)) {
      consonantChars.push(char)
    }
  }

  return consonantChars.join("")
}

function main() {
  const input = readLine()

  //WRITE YOUR CODE HERE
  const charVowel = procVowel(input)
  const charConsonant = procConsonant(input)

  console.log("Vowel Characters : ")
  console.log(charVowel)
  console.log("Consonant Characters : ")
  console.log(charConsonant)
}
