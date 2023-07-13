const Employee = require("../models/Employee");

module.exports = {
  async createEmployee(req, res) {
    try {
      const employee = new Employee({
        user: req.body.user,
        password: req.body.password,
      });

      employee.save();
      res.json(employee);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao criar o usuario" });
    }
  },

  
  async deleteEmployee(req, res) {
    try {
      const result = await Employee.findByIdAndDelete(req.params.id);
      res.json(result);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao deletar o usuário" });
    }
  },

  async updateEmployee(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o cliente existe no banco de dados
      const employee = await Employee.findById(id);
      if (!employee) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
      }

      // Atualizar os dados do cliente
      employee.user = req.body.user,
      employee.password = req.body.password,

      
      // Salvar as alterações no banco de dados
      await employee.save();

      res.json(employee);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar o usupario" });
    }
  },

  async employeeLists(req, res) {
    try {
      const employeeLists = await Employee.find();
      res.json(employeeLists);
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      res.status(500).json({ msg: "Erro ao buscas os usuário" });
    }
  },
}