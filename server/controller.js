const Product = require('../database/Product.js');

// don't currently need this function but I'll leave it for now
const getProduct = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getSimilarProducts = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => Product.find().where('_id').in(product.relatedProductIds))
    .then((relatedProducts) => {
      res.send(relatedProducts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getProduct,
  getSimilarProducts,
};