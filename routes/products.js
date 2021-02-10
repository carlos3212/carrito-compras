var Products;
exports.setModel = function (modelo) {
Products = modelo;

};

exports.create = function(req, res){
  res.render('save', {
    title: 'Carro De Compras',
    put: false,
    action: '/additem',
    products: new Products({
        prod_name: '',
        subcategory: '',
        category_id: '',
        precio: '',
        cantidad: ''
    })
  });
};
exports.store = function(req, res){
  var products = new Products({
    prod_name: req.body.prod_name,
        subcategory: req.body.subcategory,
        category_id: req.body.category_id,
        precio: req.body.precio,
        cantidad:req.body.cantidad
    
  });
  products.save(function(error, documento){
    if(error){
      res.send('Error al intentar agregar el item.');
    }else{  
      res.redirect('/');
    }
  });
};
