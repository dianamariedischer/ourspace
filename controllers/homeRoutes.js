const router = require("express").Router();
const { User, ApartmentCollection, Apartment, Comment } = require("../models");

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
        //loggedIn: req.session.loggedIn,
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

    const userData = await User.findByPk(req.session.userId, {
      attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      const dbApartmentCollectionData = await ApartmentCollection.findAll({
        where: {
          user_id: req.session.userId
        },
        include: [
          {
            model: Apartment,
            attributes: [
              'imagelink',
              'address1',
            ],
          }
        ]
      });
  
      const collections = dbApartmentCollectionData.map((collection) =>
        collection.get({ plain: true })
      );

      res.render("landingpage", {
        collections,
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("landingpage", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all apartments in apartment collection
router.get("/apartmentcollection/:id", async (req, res) => {
  try {
    const dbApartmentCollectionData = await ApartmentCollection.findByPk(req.params.id, {
      include: [
        {
          model: Apartment,

          include: [
            { 
              model: User,
              attributes: ['firstName']
            },
            { model: Comment,
              attributes: ['id', 'text'],
              include: [
                {
                  model: User,
                  attributes: ['firstName']
                }
              ]
            }]
        },
      ],
    });

    const collection = dbApartmentCollectionData.get({ plain: true });
    const userData = await User.findByPk(req.session.userId, {
      attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("apartmentcollection", {
        collection,
        loggedIn: req.session.loggedIn,
        name: user.first_name,
      });

    } else {
      res.render("apartmentcollection", {
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
    const dbApartmentData = await Apartment.findByPk(req.params.id, {
      include: [{ 
        model: User,
        attributes: ['firstName']
      },
      { model: Comment,
        attributes: ['text'],
        include: [
          {
            model: User,
            attributes: ['firstName']
          }
        ]
      }]
    });

    console.log(dbApartmentData)

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
router.get("/collectionform", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
        attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("collectionform", {
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("collectionform", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Apartment Form route
router.get("/apartmentForm", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userId, {
        attributes: ['first_name'],
    });

    if (userData) {
      const user = userData.get({ plain: true });

      res.render("apartmentform", {
        loggedIn: req.session.loggedIn,
        name: user.first_name
      });

    } else {
      res.render("apartmentform", {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
