const Crime = require('../models/crime');


module.exports = {
    index: async(req, res, next) => {
        //res.json("Holaaaa")
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






};