const router = require("express").Router();
const userRoutes = require("./userRoutes");
const apartmentCollectionRoutes = require("./apartmentCollectionRoutes");
const apartmentRoutes = require("./apartmentRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/apartmentcollections", apartmentCollectionRoutes);
router.use("/apartments", apartmentRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
