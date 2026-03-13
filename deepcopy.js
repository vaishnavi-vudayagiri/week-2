 const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };


      //1. Create a deep copy of order
      let  copyorder=structuredClone(order)
      
     // 2. Modify in copied object:
       //     i. customer.address.city
      const order1 = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "warangal",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };
        //    ii. items[0].price
        const order2 = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "warangal",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 100000 }
                  ]
                };
                
                console.log(order)
                 console.log(order1)
                console.log(order2)
        //    iii. Verify original object remains unchanged