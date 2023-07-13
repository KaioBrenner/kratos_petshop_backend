const Client = require("../models/Client");

module.exports = {
  async createClient(req, res) {
    try {
      const client = new Client({
        fullName: req.body.fullName,
        cpf: req.body.cpf,
        tel: req.body.tel,
        active: true,
        cep: req.body.cep,
        address: req.body.address,
        district: req.body.district,
        city: req.body.city,
        state: req.body.state,
      });

      client.save();
      res.json(client);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao criar o cliente" });
    }
  },

  async clientLists(req, res) {
    try {
      const clientLists = await Client.find();
      res.json(clientLists);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os clientes" });
    }
  },

  async deleteClient(req, res) {
    try {
      const result = await Client.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o cliente" });
    }
  },

  async getClient(req, res) {
    try {
      const result = await Client.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas o cliente" });
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

  async addPetToClient(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o cliente existe no banco de dados
      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      }

      client.pets = req.body.pet;

      await client.save();

      res.json(client);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar o cliente" });
    }
  },
};
