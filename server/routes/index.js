﻿const CONSTANTS = require("../constants");
const express = require("express");
const sampleData = require("../sampleData");


const router = express.Router();


const classrooms = require("./classrooms");


// LIST ENDPOINTS

router.all('/', (req, res, next) => {
  console.log(`${req.method} for ${req.url}`);
  next();
});

router.use('/classrooms', classrooms);



// router.get(CONSTANTS.ENDPOINT.LIST, function(req, res) {
//   res.json(sampleData.listTextAssets);
// });

// router.post(CONSTANTS.ENDPOINT.LIST, function(req, res) {
//   let listItem = {
//     text: req.body.text,
//     _id: sampleData.listID
//   };
//   sampleData.listTextAssets.unshift(listItem);
//   res.json(listItem);
//   sampleData.listID++;
// });

// router.delete(CONSTANTS.ENDPOINT.LIST + "/:_id", function(req, res) {
//   const { _id } = req.params;
//   var index = sampleData.listTextAssets.findIndex(
//     listItem => listItem._id === Number(_id)
//   );
//   if (index > -1) {
//     sampleData.listTextAssets.splice(index, 1);
//     res.json({ _id: Number(_id), text: "This commented was deleted" });
//   } else {
//     res.status(404).send("Could not find item with id:" + _id);
//   }
// });


module.exports = router;
