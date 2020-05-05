const router = require('express-promise-router')();

const {
    //aqui van los controladores
    index, googleMap,graficaLineal,crimeList
} =require('../controllers/crime')

router.get('/',index);
router.get('/googleMap',googleMap);
router.get('/crimeList',crimeList);
router.get('/graficaLineal',graficaLineal);
//router.post('/',newUser);
//router.get('/:userId', getUser);
/*
router.put('/:userId', replaceUser);
router.delete('/:userId',DeleteUser);
*/
module.exports = router;