const router = require("express").Router();
const { Comment } = require("../../models");

//router.post("/comment", withAuth, async (req, res) => {
router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      text: req.body.text,
      apartment_id: req.body.apartment_id,
      user_id: req.session.userId,
    });

    console.log(newComment)

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ["id", "text", "user_id", "apartment_id"],
        },
      ],
    });

    const comment = dbCommentData.get({ plain: true });
    res.render("apartmentCollection", {
      comment,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
