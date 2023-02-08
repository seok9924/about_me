class Product {
    static id = 0;
    constructor(name, quantity, product_price) {
      this.id = ++Product.id;
      this.name = name;
      this.quantity = quantity;
      this.product_price = product_price;
      this.total_price = quantity * product_price;
    }
  }
  class Plain {
    constructor(name) {
      this.name = name;
      this.total_payments = 0;
    }
    buy(product, quantity) {
      if (product instanceof Product) {
        this.total_payments += product.total_price;
        console.log(`${this.name}가 ${product.name} ${quantity}개를 구매했습니다.`);
        console.log(`${this.name}가 ${product.name} ${quantity}개를 구매하여 총 구매금액은 ${total_payments}입니다.`);
        console.log(`${product.name}의 가격이 0.5% 적립되어 ${product.product_price * 0.005 * quantity}원이 적립되었습니다.`);
      } else {
        return "바코드를 읽을 수 없습니다.";
      }
    }
  }
  class Friends extends Plain {
    constructor(name) {
      super(name);
    }
    buy(product) {
      super.buy(product, quantity);
      console.log(`${this.name}가 ${product.name} ${quantity}개를 구매했습니다.`);
      console.log(`${this.name}가 ${product.name} ${quantity}개를 구매하여 총 구매금액은 ${total_payments}입니다.`)
      console.log(`${product.name}의 가격이 1% 적립되어 ${product.product_price * 0.01 * quantity}원이 적립되었습니다.`);
      this.total_payments *= 1;
    }
  }
  class Purple extends Friends {
    constructor(name) {
      super(name);
    }
    buy(product) {
      super.buy(product, quantity);
      console.log(`${this.name}가 ${product.name} ${quantity}개를 구매했습니다.`);
      console.log(`${this.name}가 ${product.name} ${quantity}개를 구매하여 총 구매금액은 ${total_payments}입니다.`);
      console.log(`${product.name}의 가격이 7% 적립되어 적립된 가격은 ${product.product_price * 0.07 * quantity}원 입니다.`);
      this.total_payments *= 1;
    }
  }
  const snack = new Product("새우깡", 3, 1500);
  const user1 = new Plain("user1");
  const user2 = new Friends("user2");
  const user3 = new Purple("user3");
  user1.buy(snack);
  console.log(user1.total_payments);
  user2.buy(snack);
  console.log(user2.total_payments);
  user3.buy(snack);
  console.log(user3.total_payments);