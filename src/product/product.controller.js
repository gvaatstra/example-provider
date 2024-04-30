const ProductRepository = require("./product.repository");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()


const repository = new ProductRepository();

exports.getAll = async (req, res) => {
    res.send(await repository.fetchAll())
};
exports.getById = async (req, res) => {
    const product = await repository.getById(req.params.id);
    product ? res.send(product) : res.status(404).send({message: "Product not found"})
};
exports.addProduct = async (req, res) => {
    const newProduct = await repository.addProduct(req.body)
    newProduct ? res.send(newProduct) : res.status(404).send({message: "Product not correctly saved"})
};

exports.repository = repository;