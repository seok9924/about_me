let id= 'user';
let pw= 1234;
var a=prompt('아이디 입력')
var b=Number(prompt('비밀번호입력'))

if (a===id && b===pw){
    document.write('로그인 되셨습니다')
    
}
else{

    if(a===id||b==pw){
        if(a===id){
            document.write('비밀번호가 틀렸습니다')
        }
        else{
            document.write('아이디가 틀렸습니다')
        }
    }
    else{
        document.write('다틀림')
    }

  
};
var students = ['강동엽', '고석주', '김건영', '남정우', '양효준', '이상훈', '이재영F', '전현준', '정제경', '주한솔', '지우근', '최세현', '이재영M'];

for (var i=0; i < students.length; i++) {
  document.write(students[i] + '님, 맛점하세요!')
}
