class User {
    id:number;
    name:string;
    constructor(id:number, name:string) {
        this.id = id;
        this.name = name;
    }

    display() :void {
        console.log("id=" + this.id + " name=" + this.name);
    }

}

class Customer extends User {
    discount:number;

    constructor(id:number, name:string, discount:number) {
        super(id, name);
        this.discount = discount;
    }

    display():void {
        super.display();
        console.log("discont =" + this.discount);
    }

}

const customer1:Customer = new Customer(1, "melvin",100);
const customer2:Customer = new Customer(2, "brishti",200);
customer1.display();
customer2.display();