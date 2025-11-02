const obj = {
    greeting: 'hello',
    foo: {
        bar: 'baz'
    },
    now: new Date(),
    func: function() {
        console.log('function');
    }
}
console.log(obj.greeting);
console.log(obj['greeting']);
