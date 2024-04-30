const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1", 'yellow', 'EXT')],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1", 'blue', 'EXT')],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2", 'green', 'EXT')],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
    async addProduct(body){
        this.products.set((this.products.size+10).toString(), new Product(this.products.size+10, body.type, body.name, body.version, body.color, body.extra))
        return this.products.get((this.products.size+9).toString())
    }
}

module.exports = ProductRepository;
