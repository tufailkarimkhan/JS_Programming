/*Pipe function is use to execute multile functions in sequence, previous function output will the input of next function, Without storing data into some ware you can assign it to another function.*/
const addTwo = (input) => input + 2;

const multiplyWithFive = (input) => input * 5;

const pipe =  (...fns) => (input) => fns.reduce((acc, fn) =>  fn(acc), input);

const processresult = pipe(addTwo,multiplyWithFive)(3);

//const result = processresult(3)+

//console.log(result)
console.log(processresult)

/*Compose function is working same as Pipe but it will execute the function from right to left, now we don't need to execute function in the function like:  f(g(h(x)))*/

