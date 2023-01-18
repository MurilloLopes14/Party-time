const PartyModel = require("../models/Party");

const checkPartyBugdet = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);

  if (priceSum > budget) {
    return false;
  }

  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      //* Budget Validation
      if (party.services && !checkPartyBugdet(party.budget, party.services)) {
        res.status(406).json({ msg: "O seu orçamento é insuficiente" });
        return;
      }

      const response = await PartyModel.create(party);

      res
        .status(201)
        .json({ response, msg: "Festa criada e lançada com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },

  getAll: async (req, res) => {
    try {
      const parties = await PartyModel.find();

      res.status(200).json({ parties });
    } catch (err) {
      console.log(err);
    }
  },

  getOne: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await PartyModel.findById(id);

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada!" });
        return;
      }

      res.status(200).json({ party });
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await PartyModel.deleteOne({ _id: id });

      if (!party) {
        res.status(404).json({ msg: "Festa não encontrada" });
        return;
      }

      res.status(200).json({ party, msg: "Festa excluída com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      //* Budget Validation
      if (party.services && !checkPartyBugdet(party.budget, party.services)) {
        res.status(406).json({ msg: "O seu orçamento é insuficiente" });
        return;
      }

      const updatedParty = await PartyModel.findByIdAndUpdate(id, party);

      if (!updatedParty) {
        res.status(404).json({ msg: "Festa não encontrada" });
        return;
      }

      res.status(200).json({ party, msg: "Festa atualizada com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = partyController;
