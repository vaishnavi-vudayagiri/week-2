import { getProductById, checkStock} from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {


                            // 1. Get product details
                            const pDetails=getProductById(productId);
                            if(!pDetails) return "Product Not Available";

                            // 2. Check stock availability
                            const stock=checkStock(productId,quantity);
                            if(!stock){
                            return "Stock Not Available";
                            }

                            // 3. Check if product already in cart
                            const existingItem = cartItems.find(p=>p.productId===productId);
                            if(existingItem){
                              existingItem.quantity+=quantity;
                            }else{
                              cartItems.push({productId,quantity,price: pDetails.price});
                            }
                            //    - If yes, update quantity
                            //    - If no, add new item

                            // 4. Return success/error message
                            return "Product Added Successfully";

                          }
                          

                          export function removeFromCart(productId) {
                            // Remove product from cart
                            cartItems=cartItems.filter(item=>item.productId!==productId);
                            }
                          
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                            const stockAvailable=checkStock(productId,newQuantity);
                            if(!stockAvailable){
                                return "Stock Not Available";
                            }
                            const item=cartItems.find(p=>p.productId===productId);
                            if(!item){
                              return "Product Not Found in Cart";
                            }
                            item.quantity=newQuantity;
                            return "Quantity Updated Successfully";
                          
                          }
                          

                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems;
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                            const total=cartItems.reduce((result,item)=>{
                              return result+(item.price*item.quantity);
                            },0);
                            return total;
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems.splice(0,cartItems.length);
                            return "Cart Cleared Successfully";
                          }