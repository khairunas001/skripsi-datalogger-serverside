const route = require('express').Router()

route.get('/',(req,res)=>{
    res.json({
        message:"Halaman Utama"
    })
})

const loggerRoutes = require('./logger.js');
route.use('/loggers',loggerRoutes)
module.exports=route