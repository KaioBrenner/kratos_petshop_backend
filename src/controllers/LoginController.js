const Login = require("../models/Login");

module.exports = {
  async createLogin(req, res) {
    try {
      const login = new Login({
        logged: false
      });

      login.save();
      res.json(login);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao criar o cliente" });
    }
  },

  async loginLists(req, res) {
    try {
      const loginLists = await Login.find();
      res.json(loginLists);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscar o login" });
    }
  },

  async updateClient(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o cliente existe no banco de dados
      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }

      // Atualizar os dados do cliente
      client.fullName = req.body.fullName;
      client.cpf = req.body.cpf;
      client.tel = req.body.tel;
      client.active = req.body.active;
      client.cep = req.body.cep;
      client.address = req.body.address;
      client.district = req.body.district;
      client.city = req.body.city;
      client.state = req.body.state;

      // Salvar as alterações no banco de dados
      await client.save();

      res.json(client);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar o cliente" });
    }
  },
};
