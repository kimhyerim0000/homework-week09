const obj = {a:10,b:20,c:30};

const {a:foo,c:bar} =obj;    //별칭을 사용해 꺼내기
console.log(foo);  //10
console.log(bar);  //30

const arr =['foo','bar','baz'];

for (let i =0; i<arr.length;i++) {
    console.log(arr[i]);
}

arr.forEach((element) => {
    console.log(element);
});