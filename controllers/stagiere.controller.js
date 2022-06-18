const stagiereModels = require("../models/stagiere.models");

const createStagiere = async (req, res) => {
	const newStagiere = new stagiereModels({
		cin: req.body.cin,
		nom: req.body.nom,
		prenom: req.body.prenom,
		email: req.body.email,
        encadreur: req.body.encadreur
	});
	try {
		const savedStagiere = await newStagiere.save();
		return res.status(200).json(savedStagiere);
	} catch (err) {
		return res.status(500).json(err);
	}
};

const getStagieres = async (req, res) => {
	try {
		const stagieres = await stagiereModels.find();
		return res.status(200).json(stagieres);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const getStagiere = async (req, res) => {
	const id = req.params.stagiereId;

	try {
		const stagiere = await stagiereModels.findById(id);
		return res.status(200).json(stagiere);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const deleteStagiere = async (req, res) => {
	const id = req.params.stagiereId;
	try {
		const stagiere = await stagiereModels.findByIdAndDelete(id);
		return res.status(200).json(stagiere);
	} catch (err) {
		return res.status(500).json(err);
	}
};
const updateStagiere = async (req, res) => {
	const id = req.params.stagiereId;
	try {
		const stagiere = await stagiereModels.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		return res.status(200).json(stagiere);
	} catch (err) {
		return res.status(500).json(err);
	}
};

module.exports.createStagiere = createStagiere;
module.exports.getStagiere = getStagieres;
module.exports.getStagiere = getStagiere;
module.exports.deleteStagiere = deleteStagiere;
module.exports.updateStagiere = updateStagiere;
