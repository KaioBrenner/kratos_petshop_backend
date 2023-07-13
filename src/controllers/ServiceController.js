const Pet = require("../models/Pet");
const Client = require("../models/Client");
const Service = require("../models/Service");

module.exports = {
  async createService(req, res) {
    try {
      const { petId, ownerId } = req.params;

      const pet = await Pet.findById(petId);
      if (!pet) {
        return res.status(404).json({ msg: "Pet não encontrado" });
      } else {
        try {
          const service = new Service({
            bath: req.body.bath,
            shave: req.body.shave,
            nails: req.body.nails,
            delivery: req.body.delivery,
            comments: req.body.comments,
            pet: petId,
            owner: ownerId,
          });

          service.save();
          res.json(service);
        } catch (error) {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
          res.status(500).json({ msg: "Erro ao criar o Serviço" });
        }
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Serviço não encontrado" });
    }
  },

  async serviceList(req, res) {
    try {
      const serviceList = await Service.find();
      res.json(serviceList);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscar os Serviços" });
    }
  },

  async deleteService(req, res) {
    try {
      const result = await Service.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o Pet" });
    }
  },

  async getService(req, res) {
    try {
      const result = await Service.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscar o Serviço" });
    }
  },
};
