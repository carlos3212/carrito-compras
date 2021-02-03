var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productos = require ('../routes/products');

var Productsschema = mongoose.Schema({

	cod: {type: String,	required: true	  },
	prod_name: {type: String,	required: true	  },
	prod_brand: {type: String,	required: true	  },
	subcategory: {type: String,	required: true	  },
	tags: {type: String,	required: true	  },
	price: {   type: Number,     required: true	  },
	prod_units: { type: String,  required: true	  }
	//user: {type: String,	required: true	  }
	 
	
});
var ProductsModel = mongoose.model('Products', Productsschema);
productos.setModel (ProductsModel);

module.exports = mongoose.model('Products', Productsschema);