const router = require("express").Router();
const { ApartmentCollection } = require("../../models");

// add new collection
router.post("/", async (req, res) => {
  try {
    const newApartmentCollection = await ApartmentCollection.create({
      title: req.body.title,
      user_id: req.session.userId,
    }); 

    res.status(200).json(newApartmentCollection);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
