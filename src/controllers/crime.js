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
    googleMap: async(req,res, next) =>{
        try{
            const crimes = await Crime.find({latitud:1,longitud:1}).where({Location:{$ne:""},Year:{$eq:"2018"}}).limit(100); // falta hacer que solo salgan los campos de latitud y longitud
            
            res.json(crimes);
        }catch(err){
            res.status(500).json({error : "Ocurrio un error db:"+ err});
        }
    }






};