var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productos = require ('../routes/products');

var Productsschema = mongoose.Schema({

	prod_name: {
		type: String,
		required: true
	  },
	  subcategory: {
		type: String,
		required: true
	  },
	  category_id: {
		type: String,
		required: true
	  },
	  precio: {
		type: String,
		required: true
	  },
	  cantidad: {
		type: String,
		required: true
	  },
	  
	},
	{
	  timestamps: true
	
	 
	
});
var ProductsModel = mongoose.model('Products', Productsschema);
productos.setModel (ProductsModel);

module.exports = mongoose.model('Products', Productsschema);