const router = require("express").Router();
const { Apartment } = require("../../models/Apartment");

//router.post("/apartment", withAuth, async (req, res) => {
router.post("/apartment", async (req, res) => {
  try {
    const newApartment = await Apartment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newApartment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/apartmentCollection/:id", async (req, res) => {
  try {
    const dbApartmentData = await Apartment.findAll({
      include: [
        {
          model: Apartment,
          attributes: [
            "id",
            "filename",
            "address1",
            "address2",
            "city",
            "state",
            "zip",
            "date_added",
            "rent",
            "beds",
            "baths",
            "rating",
            "notes",
            "link",
            "user_id",
            "appartment_collection_id",
          ],
        },
      ],
    });

    const apartmentCollection = dbApartmentData.map((apartment) =>
      apartment.get({ plain: true })
    );
    res.render("apartmentCollection", {
      apartmentCollection,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/apartment/:id", async (req, res) => {
  try {
    const dbApartmentData = await Apartment.findByPk(req.params.id, {
      include: [
        {
          model: Apartment,
          attributes: [
            "id",
            "filename",
            "address1",
            "address2",
            "city",
            "state",
            "zip",
            "date_added",
            "rent",
            "beds",
            "baths",
            "rating",
            "notes",
            "link",
            "user_id",
            "appartment_collection_id",
          ],
        },
      ],
    });

    const apartment = dbApartmentData.get({ plain: true });
    res.render("apartment", { apartment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
