// SYNC
// task that happens sequentially and that needs the previous task to complete before executing

// Case 1
console.log(1);
console.log(2);
console.log(3);

// Case 2: blocking code
console.log(1);
for (let i = 0; i < 10000000000; i++) {
  //
}
console.log(2);
console.log(3);

// ASYNC
// Tasks that can happen simulteneously

// Case 1
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

// Case 2: Non blocking code
console.log(1);
setTimeout(() => {
  for (let i = 0; i < 10000000000; i++) {
    //
  }
  console.log(2);
}, 3000);
console.log(3);

// Case 3: Change a value inside callback

let x = 1;
console.log('Before the call', x);

setTimeout(() => {
  x = 2;
  console.log('Inside the call', x);
}, 2000);

console.log('After the call', x);

// setInterval
const myOneSecInterval = setInterval(() => {
  console.log('Hello every second!');
}, 1000);

clearInterval(myOneSecInterval);
