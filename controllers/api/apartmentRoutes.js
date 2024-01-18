const router = require("express").Router();
const { Apartment } = require("../../models");

//router.post("/apartment", withAuth, async (req, res) => {
router.post("/", async (req, res) => {
<<<<<<< Updated upstream
  try {
    const newApartment = await Apartment.create({
      imagelink: req.body.imageLink,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      rent: req.body.rent,
      beds: req.body.beds,
      baths: req.body.baths,
      rating: req.body.rating,
      notes: req.body.notes,
      link: req.body.link,
      apartment_collection_id: req.body.apartment_collection_id,
=======
  console.log(...req.body);
  try {
    const newApartment = await Apartment.create({
      ...req.body,
>>>>>>> Stashed changes
      user_id: req.session.userId,
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
