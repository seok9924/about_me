// function add(a,b) {
//     console.log(a+b);
//   }
//   function add1(a,b){
//     return a+b;
//   }
//   console.log(add1(3,4))

// var add2= (a,b)=>{
//     return a+b;
// }
// console.log(add2(4,5))

// function calculatePrice(total,tax=0.1,tip=0.15){
//     return total*(1+tax+tip)

// }
// console.log(calculatePrice(11))


var names = ['짱구', '짱아', '훈이'];

function hello(arr){
    a=''
    for (i=0;i<arr.length;i++){
        a+=`${arr[i]}님 안녕하세요\n`;
    }
    return a ; 
}
console.log(hello(names));

// 집합자료형에서 값을 각각 꺼내와서 출력하는 함수를 만들어주세요.
// for (i=0; i<names.length;i++){
//     a=hello(names[i]);
//     console.log(a);

// }

var names = ['짱구', '짱아', '훈이']

function hello(arr){
  return `${arr}님 안녕하세요!`  // 백틱 `${변수명}` - 템플릿 리터럴: 파이썬의 f-string과 같은 역할
}
// 집합자료형에서 값을 각각 꺼내와서 출력하는 함수를 만들어주세요.