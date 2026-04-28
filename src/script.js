class Pizza {
  constructor(type, size) {
    this.types = {
      "Маргарита": { price: 500, calories: 300 },
      "Пепперони": { price: 800, calories: 400 },
      "Баварская": { price: 700, calories: 450 }
    };

    this.sizes = {
      "Большая": { price: 200, calories: 200 },
      "Маленькая": { price: 100, calories: 100 }
    };

    if (!this.types[type] || !this.sizes[size]) {
      throw new Error("Тип или размер пиццы не верен");
    }

    this.type = type;
    this.size = size;
    this.toppings = [];
  }

  addTopping(topping) {
    const toppingsData = {
      "Сливочная моцарелла": { name: "Сливочная моцарелла", price: 50, calories: 20 },
      "Сырный борт": { name: "Сырный борт", price: (this.size === 'Маленькая' ? 150 : 300), calories: 50 },
      "Чедер и пармезан": { name: "Чедер и пармезан", price: (this.size === 'Маленькая' ? 150 : 300), calories: 50 }
    };

    if (!toppingsData[topping]) {
      throw new Error("Добавки не существует");
    }

    this.toppings.push(toppingsData[topping]);
  }

  removeTopping(topping) {
    this.toppings = this.toppings.filter(t => t.name !== topping);
  }

  getToppings() {
    return this.toppings.map(t => t.name);
  }

  getSize() {
    return this.size;
  }

  getType() {
    return this.type;
  }

  calculatePrice() {
    let total = this.types[this.type].price + this.sizes[this.size].price;
    this.toppings.forEach(t => total += t.price);
    return total;
  }

  calculateCalories() {
    let total = this.types[this.type].calories + this.sizes[this.size].calories;
    this.toppings.forEach(t => total += t.calories);
    return total;
  }
}

// примеры:

let pizza1 = new Pizza("Маргарита", "Маленькая");
pizza1.addTopping("Сырный борт");
pizza1.addTopping("Чедер и пармезан");

console.log(pizza1.getType());
console.log(pizza1.getSize());
console.log(pizza1.getToppings().join(", "));
console.log(pizza1.calculatePrice() + " руб");
console.log(pizza1.calculateCalories() + " ккал");

let pizza2 = new Pizza("Пепперони", "Большая");
pizza2.addTopping("Сливочная моцарелла");
pizza2.addTopping("Сырный борт");

console.log(pizza2.getType());
console.log(pizza2.getSize());
console.log(pizza2.getToppings().join(", "));
console.log(pizza2.calculatePrice() + " руб");
console.log(pizza2.calculateCalories() + " ккал");
