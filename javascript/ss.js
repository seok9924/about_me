
// var a= prompt('수학점수?')
// var b = prompt('영어점수?')
// c=Number(a)+Number(b)
// d=c/2

// alert('당신의점수는'+String(d))

// 실습  var a = 3;를 사용하여 다음의 내용을 표현 혹은 확인해보세요.
var a=3 
5<a && a<1
typeof('5')
typeof(2+a)
// 예상 10
var y= a-- +5 --a;

const myCar = {
    name: 'Gran Turismo',
    company: 'Maserati',
    speed: 300
    kor: false
  };


var a = Number(prompt("숫자를 입력해주세요: "));

if (a > 0) {
  console.log("양수")
} else if (a == 0){
  console.log("0")
} else {
  console.log("음수")
};

// 1, 2, 3이 들어오면 '압니다'
var num = 3;
switch (num) {
  case 1: case 2: case 3:
    console.log('압니다')   
    break;
  default:     // else 
    console.log('모르는 숫자입니다.')
}

// 정수인거는 무시하고 3보다 작거나 같은 경우 압니다,
//  3보다 큰 경우 모릅니다를 출력하는 if문으로 만들어보세요. 
// 1일때 one 2일때 two, 3일때 three, 
// 나머지는 모릅니다를 출력하는 if문을 만들어보시고, -> switch문으로 바꿔보세요. 
var a=1


var a=Number(prompt('숫자입력'))
if (a == 1) {
   console.log('one')
  } else if (a == 2) {
    console.log('two')
  } else if (a == 3) {
     console.log('three')
  }else{
    console.log('몰루')
  };
var a=Number(prompt('숫자입력'))
switch(a){
  case 1:
    console.log('one')
    break;
  case 2:
    console.log('two')
    break;

  case 3:
    console.log('one')
    break;
  default:
    console.log('몰루')
}

function add(a,b) {
  console.log(a+b);
}
function add1(a,b){
  return a+b;
}