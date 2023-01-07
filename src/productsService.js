// Import the necessary dependencies
const { fail } = require("assert");
const lodash = require("lodash");
const productsList = require("./products.json").products;
const fs = require('fs');

const getProducts = () => {
  return productsList;
}

const getProductsById = (productId, done) => {
  let product = null

 if(productId !=null)
 {
   product= productsList.find(x => x.id == productId);
 }

  return product;
}

const saveProduct = (newProduct, done) => {
 
 
// parse json
// stringify JSON Object
var jsonContent = ","+JSON.stringify(newProduct)+"";
console.log(jsonContent);
 
fs.appendFile("products.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return fail(500);
        
    }
    
      console.log("File has been saved");
    
 
    
  });
 
  // save a product
  return  newProduct;
}

const updateProduct = (productId, updateData, done) => {
  let updatedProductList = null;
  // update the product list
  done(null, JSON.stringify(updatedProductList));
}

const deleteProduct = (productId, done) => {
  // delete a product    
  done(null, JSON.stringify(productsList));
}


module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
}