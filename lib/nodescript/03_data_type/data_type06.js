console.log(x);             // undefined

let obj = { foo:'hello'};   // hello
console.log(obj.foo);

obj = null;
console.log(obj.foo);       // Uncaught TypeError