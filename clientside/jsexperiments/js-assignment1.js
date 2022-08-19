class Product {

    name;
    price;
    constructor(name, price) {
        this.price = price;
        this.name = name;
    }
}

class ProductService {
    productStore = [];

    addProduct(name, price) {
        const product = new Product(name, price);
        this.productStore.push(product);
    }

    findByName(name) {
        for (const product of this.productStore) {
            if (product.name === name) {
                return product;
            }
        }
        return null;
    }

    findAll() {
        return this.productStore;
    }


}

class Frontend {
    service = new ProductService();

    runUI() {
        this.service.addProduct("samsung", 20000);
        this.service.addProduct("moto", 15000);

        const found = this.service.findByName("samsung");
        console.log("****displaying fetched product");
        this.display(found);

        console.log("****display all products in store after fetch");
        const products = this.service.findAll();
        for (let product of products) {
            this.display(product);
        }
    }

    display(product) {
        console.log("name=" + product.name + " price=" + product.price);
    }

}


const frontend = new Frontend();
frontend.runUI();