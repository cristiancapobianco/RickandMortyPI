const getCharById = require("../controllers/getCharById");
const router = require("express").Router()

router.get("/:id", getCharById)


module.exports = router;