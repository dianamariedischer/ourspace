const router = require("express").Router();
const { ApartmentCollection } = require("../../models/ApartmentCollection");

//router.post("/apartmentCollection", withAuth, async (req, res) => {
router.post("/apartmentCollection", async (req, res) => {
  try {
    const newApartmentCollection = await ApartmentCollection.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newApartmentCollection);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
