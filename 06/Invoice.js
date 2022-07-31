class Invoice {
    constructor () {
        this.products = [];
    }
    
    insertProduct (name, quantify, value) {
        const newProduct = {
            name: name,
            quantify: quantify,
            value: value
        }

        this.products.push(newProduct);
    }

    getData () {
        return this.products;
    }
}