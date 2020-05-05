const router = require('express-promise-router')();

const {
    //aqui van los controladores
    index, googleMap
} =require('../controllers/crime')

router.get('/',index);
router.get('/googleMap',googleMap);
//router.post('/',newUser);
//router.get('/:userId', getUser);
/*
router.put('/:userId', replaceUser);
router.delete('/:userId',DeleteUser);
*/
module.exports = router;