const router = require("express").Router();

const partyRouter = require("./parties");
const serviceRouter = require("./services");

router.use("/", serviceRouter);
router.use("/", partyRouter);

router.get("/", (req, res) => {
  res.send("Hello Dev");
});

module.exports = router;
