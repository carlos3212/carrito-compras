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
        cod: '',
        prod_name: '',
        prod_brand: '',
        subcategory: '',
        tags: '',
        price: '',
        prod_units: ''
    })
  });
};
exports.store = function(req, res){
  var products = new Products({
    cod:req.body.cod,
    prod_name: req.body.prod_name,
    prod_brand: req.body.prod_brand,
    subcategory:req.body.subcategory,
    tags: req.body.tags,
    price: req.body.price,
    prod_units: req.body.prod_units
  });
  products.save(function(error, documento){
    if(error){
      res.send('Error al intentar agregar el item.');
    }else{  
      res.redirect('/');
    }
  });
};
