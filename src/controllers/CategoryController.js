const Category = require('../models/Category')

module.exports = {

    async createCategorys(req, res) {
        try {
            const category = new Category({
                name: req.body.name,
            });
            
            category.save();
            res.json(category);
    
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({msg: 'Erro ao criar a categoria'})
        }
      },

      async deletCategory(req, res){
        try {
            const result = await Category.findByIdAndDelete(req.params.id);
            res.json(result);
        
        } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
          res.status(500).json({msg:"Erro ao deletar a categoria"})
        }
      },

      async categoryList(req, res){

        try {
            const categoryList = await Category.find();
            res.json(categoryList);
           
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({msg:'Erro ao buscas as categorias'})
        }

        
    }
}
