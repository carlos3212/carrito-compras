module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, precio: 0};
        }
        cartItem.quantity++;
        cartItem.precio = cartItem.item.precio * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.precio;
    };

    this.removeItem = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].precio;
        delete this.items[id];
    };
    // this.deleteProducto = function(id) {
    //      Producto.findByIdAndDelete(req.params.id);
        
    //   };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};


