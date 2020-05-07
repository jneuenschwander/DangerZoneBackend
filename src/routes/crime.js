const router = require('express-promise-router')();

const {
    //aqui van los controladores
    index, googleMap,graficaLineal,crimeList,graficaBarras,graficaTorta
} =require('../controllers/crime')

router.get('/',index);
router.get('/googleMap',googleMap);
router.get('/crimeList',crimeList);
router.get('/graficaLineal/:crime',graficaLineal);
router.get('/graficaBarra',graficaBarras);
router.get('/graficaTorta',graficaTorta);
//router.post('/',newUser);
//router.get('/:userId', getUser);
/*
router.put('/:userId', replaceUser);
router.delete('/:userId',DeleteUser);
*/
module.exports = router;