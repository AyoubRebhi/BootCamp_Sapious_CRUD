const {
	getStagieres,
	createStagiere,
	getStagiere,
	deleteStagiere,
	updateStagiere,
	
} = require("../controllers/stagiere.controllers");

const router = require("express").Router();

router.get("/", getStagieres);
router.get('/:stagiereId', getStagiere)
router.delete("/:stagiereId", deleteStagiere);
router.put("/:stagiere", updateStagiere);
router.post("/", createStagiere);

module.exports = router;