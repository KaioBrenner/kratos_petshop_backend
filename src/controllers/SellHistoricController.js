const SellHistoric = require("../models/SellHistoric");

module.exports = {
  async createSellHistoric(req, res) {
    try {
      const sellHistoric = new SellHistoric({
        clientCPF: req.body.cpf,
        clientName: req.body.fullName,
        totalPrice: req.body.totalPrice,
        paymentMethod: req.body.paymentMethod,
        cart: req.body.cart,
        dateTime: req.body.dateTime
      });

      sellHistoric.save()
      res.json(sellHistoric);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao criar o histórico de compra" });
    }
  },

  async SellHistoricList(req, res){
    try {
      const sellHistoric = await SellHistoric.find();
      res.json(sellHistoric);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas o historico" });
    }
  }
};
