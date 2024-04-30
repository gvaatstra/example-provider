const router = require('express').Router();
const controller = require('./product.controller');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

router.use(jsonParser)

router.get("/product/:id", controller.getById);
router.get("/products", controller.getAll);
router.post("/products", controller.addProduct);

module.exports = router;