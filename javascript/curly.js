/* 0. 조건: 등급은 일반회원, 프렌즈, 퍼플(Plain, Friends, Purple) + 개인정보는 이름만 받습니다. 이외 3개 클래스를 구현하는데 필요한 속성, 함수를 직접 논의하고 구현해보세요

1. 일련번호, 상품명, 수량, 가격을 속성으로 가지는 Product 클래스를 구현해보세요. (일련번호는 자동 입력됨)
```
새우깡 = new Product('새우깡', 3, 1500)
```

2. 마켓컬리의 회원등급 목록을 참조하셔서 class Plain, Friends, Purple을 구현해보세요.
    - Plain 클래스에는 buy(상품명, 수량)이라는 인스턴스 메소드가 있으며,
    - 이 메소드는 자료형이 Product(instanceof)인 상품은 구매할 수 있고, // 지구를지켜라 instanceof Movie; (인스턴스명 instanceof 클래스명;)
    - 자료형이 Product가 아닌 상품은 '바코드를 읽을 수 없습니다.'라는 에러메시지를 리턴합니다.

3. Product와 회원 클래스를 이용하여 만들 수 있는 또다른 메소드를 하나 고안해 보세요.
*/


class Customer{

    static mileage=0;
    static mileage_acc=0;
    static coupon=0;
    static grade=''
    static totalpayments=0;
    
    constructor(name){
        this.name=name;
        this.mileage=Customer.mileage;
        this.mileage_acc=Customer.mileage_acc;
        this.coupon=Customer.coupon;
        this.grade=Customer.grade;
        this.totalpayments=Customer.totalpayments;
    }

    buy(prd){
        if (prd instanceof product){
            var total= prd.total_price();
            console.log(`${this.name}회원 님 안녕하세요`)
            console.log(`회원님의 등급은 ${this.grade}입니다`)
            console.log(`${this.name}가 ${prd.productname} ${prd.quantity}개를 구매했습니다.`);
            this.total_payments(total);
            console.log(`${this.name}가 ${prd.productname} ${prd.quantity}개를 구매하여 총 구매금액은 ${this.totalpayments}입니다.`);
            this.add_mileage(total);
            console.log(`${prd.productname}의 가격이 ${Math.round(this.mileage_acc*100,0)}% 적립되어 ${Math.round(prd.price *this.mileage_acc * prd.quantity,0)}원이 적립되었습니다.`);
            console.log(`총 적립액은 ${this.mileage}원 입니다`)
        }
        else{
            console.log('바코드를 읽을 수 없습니다')
        }
    }
    add_mileage(total){
        this.mileage+=total*this.mileage_acc;
        return this.mileage_acc;
    }
    total_payments(total){
        this.totalpayments+=total;
    }
    how_much(){
        console.log(`이번 달 ${this.totalpayments}원 구매하셨습니다`);
        this.next_month_grade();
    }
    next_month_grade(){
        let today= new Date();
        var nm=today.getMonth()+2;
        if (this.totalpayments>=1000000){
            console.log(nm,'월달 예정회원등급은 Purple입니다');
        }
        else if (this.totalpayments>=150000){
            console.log(nm,'월달 예정 회원등급은 Friends입니다');
        }
        else{
            console.log(nm,'월달 예정 회원등급은 Plain입니다');
        }
    }

   
}

class Plain extends Customer{
    static mileage_acc=0.005;
    static coupon=0;
    static grade='Plain';

    constructor(name){
        super(name);
        this.mileage_acc=Plain.mileage_acc;
        this.coupon=Plain.coupon;
        this.grade=Plain.grade;
    }

}

class Friends extends Customer{
    static mileage_acc=0.01;
    static coupon=18000;
    static grade='Friends';

    constructor(name){
        super(name);
        this.mileage_acc=Friends.mileage_acc;
        this.coupon=Friends.coupon;
        this.grade=Friends.grade;
    }


}

class Purple extends Customer{
    static mileage_acc=0.07;
    static coupon=40000;
    static grade='Purple';

    constructor(name){
        super(name);
        this.mileage_acc=Purple.mileage_acc;
        this.coupon=Purple.coupon;
        this.grade=Purple.grade;
    }
    double(){
        console.log('더블후기 혜택 대상자입니다');
    }

 
   
}
class Product{
    constructor(productname,quantity,price){
        this.productname=productname;
        this.quantity=quantity;
        this.price=price;
    }
    total_price(){
        return this.quantity*this.price;
    }
    
}
var a =new Product('새우깡',10,1500);
var se= new Plain('세현');
// se.buy(a); 
// se.buy(a); 
// se.how_much()
var s2= new Purple('세현');

s2.buy(a);
s2.buy(a);
s2.how_much();
s2.double();
// var se1= new Friends('세현');
// se1.buy(a);
// se1.buy(a);

// var se2 = new Purple('세현');
// se2.buy(a);
// se2.buy(a);
// se2.buy(2);


// 클래스 첫이름 대문자 , 스네이크형과 카멜형 섞여있음//
// 맨 위에 멀티 주석 달기 , 파일 소개 


// 더블 후기 => 혜택이 있음을 알려주는 정도만 진행  &

// console.log(today.getMonth()+1 ${total_payments} 얼마입니다 다음달 회원등급은 {}}어떻게 됩니다 .);




// 매달 1일 초기화 초까지 명시 &

// 총 구매금액 구하기 > 우근님  총구매금액 total_payments()  

// toay 

 


// 현 시점 기준 등급 필요하고 => 다음 달에


// 현 시점 총 구매 금액  => 다음달에 등급 변화 어떻게 할건지 



// 변수 총 구매금액 필요함

// 3개의 등급 존재 

// 다음달에 등급이 바뀌느냐 마느냐 

// 조건 줄때 나는 프렌즈 시작


// 나는 퍼플로 시작했다 => 다음달에 퍼플가 유지가 되는가? => 프렌즈 다음달이 되었을 때


// var a= new Plain('세현') => new Purple('세현')
// 2/6 총 구매금액 100만 현 등급 일반 => 
// a.total_payment >100; => a= Purple(퍼플 선언) 
// 3/1 =>

// 구매이력 {
    
// }
// 회원
// let today= new Date();

