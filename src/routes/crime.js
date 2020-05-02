const router = require('express-promise-router')();

const {
    //aqui van los controladores
    index
} =require('../controllers/crime')

router.get('/',index);

//router.post('/',newUser);
//router.get('/:userId', getUser);
/*
router.put('/:userId', replaceUser);
router.delete('/:userId',DeleteUser);
*/
module.exports = router;