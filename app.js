const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const config=require('./config/database');
const boards=require('./routes/boards');
const lists=require('./routes/lists');
const tasks=require('./routes/tasks');
mongoose.connect(config.database);
mongoose.connection.on("connected",function(){
    console.log("connected");
})
app.use(bodyParser.json());    
app.use(express.static(path.join(__dirname,"public")));
app.use('/boards',boards);
app.use('/lists',lists);
app.use('/tasks',tasks);
app.listen('3000',()=>{
    console.log("listening to 3000");
})