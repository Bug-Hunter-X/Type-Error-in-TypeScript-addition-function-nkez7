function add(a: number, b: number): number {
  return a + b;
}

let result1 = add(1, 2); // Correct: no error

function addString(a: number, b: string): string {
  return a + b; //Converts number to string
}
let result2 = addString(1, "2"); // Correct: no error

function addAny(a: any, b: any): any {
  return a + b;
}
let result3 = addAny(1, "2"); // Correct: no error 