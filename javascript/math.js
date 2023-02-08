var num = 10;
var num1 = 1.113;
var num2 = 1.756;
var str = '가나다라';

// Math.ceil (올림)
// Math.floor (내림)
// Math.round (반올림)
// 소수점 이하를 반올림 할 때는 num2.toFixed(자리수) 라는 함수를 사용합니다 
// 소수점 이하 자리수를 모두 균일하게 맞춰야 하면 num2.toFixed(자리수) 를 사용할 수 있습니다
// Math.ceil(str); // Not a Number -> if 자료형 구분하지 않아도 
// isNaN(str) // true 
// isNaN(num2) // false
// var num3 = NaN // "number" 자료형으로 관리됨
// var liter = '14.6L'
// parseInt(liter) // 14
// parseFloat(liter) // 14.6
// var liter2 = '14.67.5.3L'
// parseInt(111.3, 2) // 다른 기수법을 적용할 수도 있습니다. 2의 2승 + 2의 1승 + 2의 0승 = 7
// Math.random() // 0과 1 사이의 임의의 숫자를 골라서 우리에게 출력해줍니다
// parseInt(Math.random()*10)   
// parseInt(Math.random()*100 + 1) // 1~100 사이의 임의의 숫자
// Math.sign(num2) // 양수이면 1, 0이면 0, 음수이면 -1을 출력합니다. 자료형 "number"를 유지하기 위해서
// var num5 = -1234.1111
// Math.abs(-1.3245) // 절대값
// Math.PI // 3.14~~~~~~~
// Math.max(1,3,4,5,6) // 최대값
// Math.min(1,3,4,5,6) // 최소값

// var array = [1,2,3,4,5,6,111]
// Math.max(...array) // 111
// Math.max(array) // NaN
// Math.pow(2, 3) // 거듭제곱 2**3과 같음
// Math.sqrt(16) // 4 // root를 의미합니다

// // 실습. 로또번호 뽑기 - ramdom()을 사용하여 1~46 사이의 6개의 양의 정수를 뽑고 가장 큰 수, 가장 작은수를 출력하세요.
// parseInt(Math.random()*10 + 1)
Math.floor(Math.random()*45)+1;