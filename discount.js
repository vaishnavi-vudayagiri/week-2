  //Coupon and discount logic
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {


                            // 1. Check if coupon exists
                            const coupon=coupons[couponCode];
                            if(!coupon) {
                                 return {
                                    valid:false,
                                    message:"Invalid Coupon Code"
                                 };
                            }    

                            // 2. Check minimum amount requirement
                            if(cartTotal<coupon.minAmount) {
                                return{
                                    valid:false,
                                    message:`Minimum Cart Amount Should Be ${coupon.minAmount}`
                                };
                            }    

                            // 3. Check category requirement (if any)
                            // Return { valid: true/false, message: '...' }
                            if(coupon.category){
                                const categoryCheck = cartItems.filter(item => item.category === coupon.category);

                            if(categoryCheck.length === 0){
                                return {
                                    valid: false,
                                    message:`Coupon Valid only for ${coupon.category}`
                                };
                            }
                            }
                            
                            return {
                                valid:true,
                                message:"Coupon Applied Successfully"
                            };

                          }
                          

                          export function calculateDiscount(couponCode, cartTotal) {


                            // Calculate discount amount based on coupon type
                            // Return discount amount
                            const coupon=coupons[couponCode];
                            if(coupon.type==="percentage"){
                                return (cartTotal*coupon.value)/100;
                            }
                            if(coupon.type==="flat"){
                                return coupon.value;
                            }
                            return 0;


                          }
                          

                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            const validate=validateCoupon(couponCode, cartTotal, cartItems);
                        
                            // 2. If valid, calculate discount
                            if(validate.valid){
                                const disc=calculateDiscount(couponCode,cartTotal);

                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                                return {
                                    originalTotal:cartTotal,
                                    discount:disc,
                                    finalTotal:(cartTotal-disc),
                                    message:"Discount Applied Successfully"
                                };
                          }
                          return{
                            originalTotal:cartTotal,
                            discount:0,
                            inalTotal:cartTotal,
                            message:validate.message
                          }

                          
                        }