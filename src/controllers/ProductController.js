const Product = require('../models/Product')
const Category = require('../models/Category')

module.exports = {
  async createProduto(req, res) {
    try {
      const { productName, category, stock, price } = req.body;
      
    
      console.log(productName)
      const product = new Product({
        productName: req.body.productName,
        category: req.body.category,
        stock: req.body.stock,
        price: req.body.price,
      });


      await product.save();
      res.json(product);
    } catch (error) {
      console.log("Axios error:", error.message);
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);
      res.status(500).json({ msg: "Internal server error" });
    }
  },

  async productList(req, res) {
    try {
      const productList = await Product.find();
      res.json(productList);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os produtos" });
    }
  },

  async deleteProduct(req, res) {
    try {
      const result = await Product.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o cliente" });
    }
  },

  async getProduct(req, res) {
    try {
      const result = await Product.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas o produto" });
    }
  },

  async updateProduct(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o cliente existe no banco de dados
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ msg: "Produto não encontrado" });
      }

      // Atualizar os dados do cliente
      product.productName = req.body.productName;
      product.category = req.body.category;
      product.stock = req.body.stock;
      product.price = req.body.price;

      // Salvar as alterações no banco de dados
      await product.save();

      res.json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar o produto" });
    }
  },
  
};
