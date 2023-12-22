const router = require("express").Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
const diagnosticRouter = require("./diagnostics");
// TODO: import your diagnostics route

router.use("/tips", tipsRouter);
router.use("/feedback", feedbackRouter);
// TODO: Initialize diagnostics route
router.use("/diagnostics", diagnosticRouter);

module.exports = router;
