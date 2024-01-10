const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apartmentCollectionRoutes = require('./apartmentCollectionRoutes');
const apartmentRoutes = require('./apartmentRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/apartmentCollectionRoutes', apartmentCollectionRoutes);
router.use('./apartmentRoutes', apartmentRoutes);
router.use('./commentRoutes', commentRoutes);

module.exports = router;
