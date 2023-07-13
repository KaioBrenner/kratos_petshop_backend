const Pet = require("../models/Pet");
const Client = require("../models/Client");

module.exports = {
  async createPet(req, res) {
    try {
      const { id } = req.params;

      const client = await Client.findById(id);
      if (!client) {
        return res.status(404).json({ msg: "Cliente não encontrado" });
      } else {
        try {
          const pet = new Pet({
            petPicture: req.body.petPicture,
            petName: req.body.petName,
            race: req.body.race,
            size: req.body.size,
            age: req.body.age,
            weight: req.body.weight,
            sex: req.body.sex,
            owner: id,
          });

          pet.save();
          res.json(pet);
        } catch (error) {
          console.log("====================================");
          console.log(error);
          console.log("====================================");
          res.status(500).json({ msg: "Erro ao criar o Pet" });
        }
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Cliente não encontrado" });
    }
  },

  async petList(req, res) {
    try {
      const petList = await Pet.find();
      res.json(petList);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os Pets" });
    }
  },

  async deletePet(req, res) {
    try {
      const result = await Pet.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o Pet" });
    }
  },

  async updatePet(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o pet existe no banco de dados
      const pet = await Pet.findById(id);
      if (!pet) {
        return res.status(404).json({ msg: "Pet não encontrado" });
      }

      // Atualizar os dados do cliente
      pet.petPicture = req.body.petPicture;
      pet.petName = req.body.petName;
      pet.race = req.body.race;
      pet.size = req.body.size;
      pet.age = req.body.age;
      pet.weight = req.body.weight;
      pet.sex = req.body.sex;

      // Salvar as alterações no banco de dados
      await pet.save();

      res.json(pet);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar o cliente" });
    }
  },

  async getPet(req, res) {
    try {
      const result = await Pet.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscar o Pet" });
    }
  },
};
