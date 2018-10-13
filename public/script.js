var PRICE = 9.99;
new Vue({
   el: '#app' ,
   data: {
       total: 0,
       items: [
           { id:1, title: 'item 1'},
           { id:2, title: 'Item 2'},
           { id:3, title: 'item 3'}
       ],
       cart: []
   },
   methods: {
     addItem: function(index) {
         this.total += 9.99;
         let item = this.items[index];
         let found = false;
         for(let i = 0; i < this.cart.length; i++){
             if (this.cart[i].id === item.id){
                 found = true;
                 this.cart[i].qty++;
             }
         }
         if(!found){
            this.cart.push({
                id: item.id,
                title: item.title,
                qty: 1,
                price: PRICE
             });
         } 
     },
     inc: function(item) {
         console.log('inc');
     },
     dec: function(item){
         console.log('dec');
     }  
   },
   filters: {
       currency: function(price){
            return '$'.concat(price.toFixed(2));
       }
   }
});
