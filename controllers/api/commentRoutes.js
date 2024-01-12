const router = require('express').Router();
const { Comment } = require('../../models/Comment');


router.post('/', withAuth, async (req, res) => {
  try{
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  }catch (err){
    res.status(400).json(err);
  }
});



router.get('/api/comment', async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'text',
            'user_id',
            'apartment_id',
          ],
        },
      ],
    });

    const comment = dbCommentData.get({ plain: true });
    res.render('apartmentCollection', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;