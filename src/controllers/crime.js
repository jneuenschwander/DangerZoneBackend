const Crime = require('../models/crime');


module.exports = {
    //localhost:3000/crimes/
    index: async(req, res, next) => {
        try{
            const crimes = await Crime.find({},function(err,collection){console.log(collection)}).limit(20);
            if(crimes){
                res.status(200).json(crimes);
            }else{
                res.status(404).json({error : "no fue encontrado ningun dato"})
                console.log("error!!!!!!!");
            }
        }catch(err){
            res.status(500).json({error : "Ocurrio un error db:"+ err})
        }
    },
    crimeList: async(req,res, next) =>{

        const crimes = await Crime.find({}).distinct('PrimaryType');
        res.status(200).json(crimes);

    },
    googleMap: async(req,res, next) =>{
        try{
            const crimes = await Crime.find({})
            .where({Location:{$ne:""},Year:{$eq:"2018"}})
            .limit(100).select({ Latitude: 1, Longitud: 1 }); // falta hacer que solo salgan los campos de latitud y longitud
            if(crimes){
                res.status(200).json(crimes);
            }else{
                res.status(404).json({error : "no fue encontrado ningun dato"})
            }
            
        }catch(err){
            res.status(500).json({error : "Ocurrio un error db:"+ err});
        }
    },
    graficaLineal: async(req ,res , next) =>{
        const primaryType = req.params;
        
        Crime.aggregate([ // ya tengo la suma  total ahora es usar la fecha para sacar los datos por mes 
            {$match: {"Year":2018}}])
            .group({_id: primaryType  ,count: {$sum: 1}}) // primary corresponde a un valor que puede no estar ligado al primarytype por lo que seria recomendable usar una asociacion
            .then(r=>res.json(r));
        
    },

    graficaBarras: async(req ,res , next) =>{ // no hay tiempo para hacer algo mas sofisticado asi que dejemoslo asi por ahora.
        Crime.aggregate([{$match:{"Year":2018}},
        {$group:{_id:'$PrimaryType',numero_crimenes:{$sum:1}}}])
        .then(r=>res.json(r));
    },
    graficaTorta: async(req ,res , next) =>{
        Crime.aggregate([{$match:{"Year":2018}},
        {$group:{_id:'$PrimaryType',numero_crimenes:{$div:[{$sum:1},267939]}}}]) //intente sacar porcentajes pero se esta rompiendo
        .then(r=>res.json(r)); 
    },



 // cantidad de registros de 2018 lo calculo con el comado de abajo
 //db.crimes.aggregate([{$match:{"Year":2018}},{$group:{_id:2018,numero_crimenes:{$sum:1}}}])=267939


};