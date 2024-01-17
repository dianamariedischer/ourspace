const router = require("express").Router();
const { User, ApartmentCollection, Apartment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
        attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("homepage", {
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("homepage", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/landingpage");
    return;
  }
  res.render("login");
});

// Signup route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/landingpage");
    return;
  }
  res.render("signup");
});

// if user is logged in, get all apartment collections that belong to user for landing page
router.get('/landingpage', async (req, res) => {
  try {
    const dbApartmentCollectionData = await ApartmentCollection.findAll({
      where: {
        user_id: req.session.userId
      }
    });

    console.log(dbApartmentCollectionData);

    const collections = dbApartmentCollectionData.map((collection) =>
      collection.get({ plain: true })
    );

    const userData = await User.findByPk(req.session.userId, {
      attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("landingpage", {
        collections,
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("landingpage", {
        collections,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all apartments in apartment collection
router.get("/apartmentCollection/:id", async (req, res) => {
  try {
    const dbApartmentCollectionData = await ApartmentCollection.findByPk(req.params.id, {
      include: [
        {
          model: Apartment,
          attributes: [
            'id',
            'filename',
            'address1',
            'date_added',
            'rent',
            'beds',
            'baths',
            'rating',
            'notes',
            'user_id'
          ],
          include: [
            {
              model: User,
              attributes: ['firstName']
            }
          ]
        },
      ],
    });

    const collection = dbApartmentCollectionData.get({ plain: true });
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("apartmentCollection", {
        collection,
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("apartmentCollection", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get individual apartment
router.get("/apartment/:id", async (req, res) => {
  try {
    const dbApartmentData = await Apartment.findByPk(req.params.id);

    const apartment = dbApartmentData.get({ plain: true });
    
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['first_name'],
    });
    
    if (userData) {
      const user = userData.get({ plain: true });

      res.render("apartment", {
        apartment,
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("apartment", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Collection Form route
router.get("/collectionform", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("collectionForm");
});

// Apartment Form route
router.get("/apartmentForm", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/");
  //   return;
  // }
  res.render("apartmentForm");
});

module.exports = router;
