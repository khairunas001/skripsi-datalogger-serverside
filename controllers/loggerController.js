const {logger} = require('../models');
//lakukan path sampai models saja yg di dimpoort file loggernya

class LoggerController {
    static getLogger(req, res) {
        logger.findAll({
            order: [['id','DESC']]
        })
            .then(loggers => {
                res.json(loggers);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }
    static add (req,res){
        const{tanggal,waktu,suhu}=req.body

        logger.create({
            tanggal,waktu,suhu
        })
            .then(result=>{
                res.json(result)
            })
            .catch(err=>{
                res.json(err)
            })
    }
}

module.exports = LoggerController;
