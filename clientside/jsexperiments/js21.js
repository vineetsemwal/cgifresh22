class User {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log("id=" + this.id + " name=" + this.name);
    }

}

class Customer extends User {
    discount;

    constructor(id, name, discount) {
        super(id, name);
        this.discount = discount;
    }

    display() {
        super.display();
        console.log("discont =" + this.discount);
    }

}

const customer1 = new Customer(1, "melvin",100);
const customer2 = new Customer(2, "brishti",200);
customer1.display();
customer2.display();