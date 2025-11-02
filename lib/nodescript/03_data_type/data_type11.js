const obj = { foo: 'hello'};

obj = { foo: 'good bye'};   //Uncaught TypeError

Object.freeze(obj);

obj.foo = 'good bye';         // 에러가 발생하지는 않음

console.log(obj.foo);  //hello