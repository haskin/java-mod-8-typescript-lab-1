
// Write a TypeScript function that adds a number of spaces to the front of a
// `string`.


function prepend(numSpaces: number, inputString: string): string {
  return inputString.padStart(inputString.length + numSpaces, " ");
}

let spaces: number = 10;
let input: string = "input";
console.log(prepend(spaces, input));