## Available Scripts

In the terminal, you can run:

### `npm run server`

It runs the server in the development mode.\
[http://localhost:4300]

## API

### CATEGORY
- Categories list - GET Method - `/category`
- Add Category - POST Method - `/category/add`\
    body = `{category: String}`

### PRODUCT
- Product list - GET Method - `/products`
- View Product - GET Method - `/products/:id`
- Add Product - POST Method - `/products/add` (Protected route Authentication required)\
    body - `{title: String, 
             price: Number,
             category: String,
             description: String,
             availability: Boolean}`
- Update Product - PATCH Method - `/products/update/:productID` (Protected route Authentication required)\
    body - `{title: String, 
             price: Number, 
             category: String,
             description: String,
             availability: Boolean}`
- Remove Product - DELETE Method - `/products/delete/:productID` (Protected route Authentication required)

### CART
Protected route Authentication required
- View Cart - GET Method - `/cart`
- Add to Cart - POST Method - `/cart/add`\
    body - `{title: String, 
             price: Number, 
             category: String,
             description: String,
             availability: Boolean,
             quantity: Number} `
- Update Quantities - PATCH Method - `/cart/update/:productID`\
    body - `{quantity: Number} `
- Remove Product - DELETE Method - `/cart/delete/:productID`

### ORDER
Protected route Authentication required
- Place order - `/order/add/:id `(Note - Product Id only from products in Cart)`
- Order history - `/order`
- Order Details - `/order/:id`

### USER
- Register - POST Method - `/users/register`\
    body - `{email: String
             pass: String}`
- Login - POST Method - `/users/register `\
    body - `{email: String
             pass: String}`

## Note:- Token is required in headers, Authorization for protected routes.
