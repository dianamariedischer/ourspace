const router = require('express').Router();
const { ApartmentCollection } = require('../../models/ApartmentCollection');



router.post('/apartmentCollection', withAuth, async (req, res) => {
  try{
    const newApartmentCollection = await ApartmentCollection.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newApartmentCollection);
  }catch (err){
    res.status(400).json(err);
  }
});



// router.get('/apartmentCollection', async (req, res) => {
//   try {
//     const dbApartmentCollectionData = await ApartmentCollection.findByPk(req.params.id, {
//       include: [
//         {
//           model: ApartmentCollection,
//           attributes: [
//             'id',
//             'title',
//             'user_id',
//           ],
//         },
//       ],
//     });

//     const apartmentCollection = dbApartmentCollectionData.get({ plain: true });
//     res.render('apartmentCollection', { apartmentCollection, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


module.exports = router;
