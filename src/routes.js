const express = require("express");
const clientController = require("./controllers/ClientController");
const petController = require("./controllers/PetController");
const CategoryController = require("./controllers/CategoryController");
const productController = require("./controllers/ProductController");
const EmployeeController = require("./controllers/EmployeeController");
const ServiceController = require("./controllers/ServiceController");
const LoginController = require("./controllers/LoginController");
const SellHistoricController = require("./controllers/SellHistoricController");
const routes = express.Router();

/* Rotas  Client */
routes.post("/newClient", clientController.createClient);

routes.get("/clients", clientController.clientLists);
routes.get("/getClient/:id", clientController.getClient);

routes.put("/updateClient/:id", clientController.updateClient);

routes.delete("/cliente/:id", clientController.deleteClient);

/* Rota Categoria */
routes.post("/newCategory", CategoryController.createCategorys);

routes.get("/categoryList", CategoryController.categoryList);

routes.delete("/deletCategory", CategoryController.deletCategory);

/* Rotas Pets */
routes.get("/pets", petController.petList);
routes.post("/newPet/:id", petController.createPet);
routes.put("/updatePet/:id", petController.updatePet);
routes.delete("/deletePet/:id", petController.deletePet);
routes.get('/getPet/:id', petController.getPet)

/*Rota Produto */
routes.post("/newProduct", productController.createProduto);
routes.get("/products", productController.productList);
routes.get("/getProduct/:id", productController.getProduct)
routes.delete("/deleteProduct/:id", productController.deleteProduct)
routes.put("/updateProduct/:id", productController.updateProduct)

/* Rota Serviços */

routes.post('/newService/:petId/:ownerId', ServiceController.createService);
routes.get('/services', ServiceController.serviceList)
routes.get('/getService/:id', ServiceController.getService)
routes.delete('/deleteService/:id', ServiceController.deleteService)

/* Rota ADM */
routes.post("/newEmployee", EmployeeController.createEmployee);
routes.get("/employees", EmployeeController.employeeLists);


/* Rota Histórico */

routes.post("/newSellHistoric", SellHistoricController.createSellHistoric)
routes.get("/sellHistorics", SellHistoricController.SellHistoricList);



/* Rota Login */

// routes.post("/newLogin", LoginController.createLogin)

routes.get("/getLogin", LoginController.loginLists)

module.exports = routes;
