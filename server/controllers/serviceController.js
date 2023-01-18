const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
  create: async (req, res) => {
    try {
      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const response = await ServiceModel.create(service);
      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();

      res.status(200).json(services);
    } catch (err) {
      console.log(err);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;

      const service = await ServiceModel.findById(id);

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.status(200).json(service);
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.deleteOne({ _id: id });

      if (!service) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.status(200).json({ service, msg: "Serviço excluído!" });
    } catch (err) {
      console.log(err);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const service = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };

      const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

      if (!updatedService) {
        res.status(404).json({ msg: "Serviço não encontrado." });
        return;
      }

      res.status(200).json({ service, msg: "Serviço atualizado com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = serviceController;
