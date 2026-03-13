  import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {

    // 1. Get cart items and total
    const items = getCartItems();
    const subtotal = getCartTotal();

    if(items.length === 0){
        return {
            orderId: null,
            items: [],
            subtotal: 0,
            discount: 0,
            total: 0,
            paymentMethod,
            status: "failed",
            message: "Cart is empty"
        };
    }

    // 2. Apply discount if coupon provided
    let discount = 0;
    let total = subtotal;

    if(couponCode){
        const result = applyDiscount(subtotal, couponCode, items);
        discount = result.discount;
        total = result.finalTotal;
    }

    // 3. Validate payment method
    if(!validatePaymentMethod(paymentMethod)){
        return {
            orderId: null,
            items,
            subtotal,
            discount: 0,
            total: subtotal,
            paymentMethod,
            status: "failed",
            message: "Invalid Payment Method"
        };
    }

    // 4. Process payment (simulate)
    const paymentStatus = "success";

    // 5. Reduce stock for all items
    items.forEach(item=>{
        reduceStock(item.productId, item.quantity);
    });

    // 6. Clear cart
    clearCart();

    // 7. Generate order summary
    return {
        orderId: generateOrderId(),
        items,
        subtotal,
        discount,
        total,
        paymentMethod,
        status: paymentStatus,
        message: "Order placed successfully"
    };
}
       

export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)

    const validMethods = ["card", "upi", "cod"];

    return validMethods.includes(method);
}
     

function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}