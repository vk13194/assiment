 const express = require('express')
 const app =express()

 //middleware
 app.use(express.json())

 app.use('/api', require('./routes/traking'))

 const PORT =5000;
 app.listen(PORT, ()=>{
console.log(`server start ${PORT}`);
 })