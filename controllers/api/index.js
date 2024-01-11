const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/apartmentCollectionRoutes', apartmentCollectionRoutes);
router.use('/apartmentRoutes', apartmentRoutes);
router.use('/commentRoutes', commentRoutes);

module.exports = router;
