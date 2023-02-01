let id= 'user'
let pw= 1234
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