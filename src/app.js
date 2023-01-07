//Import the necessary dependencies
const http = require('http')
// Define a prot at which the server will run
const PORT=3000;

const productsService = require("./productsService");
const getRequestData = require('./utils');

const server = http.createServer(async (req, res) => {
  // Get all products
  if(req.method==="GET" && req.url==='/api/products/')
  {
    
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(productsService.getProducts()))
  }

  // Get a product with specified id
  else if(req.method==="GET" && req.url.match(/\/api\/products\/([0-9]+)/)  )
  {
    const productId=req.url.split("/")[3];
    
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(productsService.getProductsById(productId)))
   
  }
  // Create a new product
  else if(req.method==="POST" && req.url==='/api/products/' )
  {
    let productData= await getRequestData(req);

    productsService.saveProduct(JSON.parse(productData));
    res.writeHead(201,{"Content-Type":"application/json"});
    res.end(JSON.stringify(productData));
  }

  // Update a specific product
  else if(req.method==="PUT")
  {
    const id=req.url.split("/")[3];
    const product=product.find
  }
  // Delete a specific Product

});

// listen for client requests
server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
})