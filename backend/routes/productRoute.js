const express = require("express");
const { getALLproducts } = require("../controllers/productController");

const router=express.Router();

router.route("/products").get(getALLproducts);

module.exports = router