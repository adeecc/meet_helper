const CONSTANTS = require("../constants");
const express = require("express");

const classrooms = require("./classrooms");

const router = express.Router();


// LIST ENDPOINTS
router.all('/', (req, res, next) => {
  next();
});

router.use('/classrooms', classrooms);

module.exports = router;