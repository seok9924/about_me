// const methodName = 'introduce';
// class Person {
//   constructor({name, age}) {
//     this.name = name;
//     this.age = age;
//   }
//   // 아래 메소드의 이름은 `introduce`가 됩니다.
//   [methodName]() {
//     return `안녕하세요, 제 이름은 ${this.name}입니다.`;
//   }
// }

// function Movie(director, actor, star, review) {
//     this.director = director
//     this.actor = actor
//     this.star = star
//     this.review = review
//     this.info = function() {
//       console.log(`감독: ${this.director}
//       배우: ${this.actor}
//       별점: ${this.star}
//       리뷰: ${this.review}`)
//     }
//   }
  
//   var 지구를지켜라 = new Movie('장준환', '신하균', 4.5, '이제 지구는 누가 지키지?')
//   var 패터슨 = new Movie('짐자무쉬', '아담드라이버', 5, '아하')


class Movie2{
    static movie_num=0;

    constructor(director,actor,star,review){
        this.director=director;
        this.actor=actor;
        this.star=star;
        this.review=review;
        this.movie_num=Movie2.movie_num;
        Movie2.movie_num++;
    }
    get_info(){
        console.log(`${this.director},${this.actor},${this.star},${this.review}`)
    }
    show_static(){
        console.log(`${this.movie_num}가 영화번호입니다`);
    }
}
class KoreanMovie extends Movie2{

    constructor(director,actor,star,review,engName){
        super(director,actor,star,review);
        this.engName=engName;
    }
    get_info(){
        super.get_info();
        console.log(`${this.engName}`);

    }
}

var d1 = new KoreanMovie('장준환','신하균',4.5,'이제지구','earth');
d1.get_info();
d1.show_static();

