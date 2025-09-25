const express=require('express')
const app=express();
const connection=require('./config/db.js')
const userRoute=require('./routes/user.route.js')
const todoRoute=require('./routes/todo.route.js')
const logger=require('./middleware/logger.js')
const auth=require('./middleware/auth.js')
const cors=require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(logger)
app.use('/user',userRoute)
app.use('/todo',auth,todoRoute)




app.listen(5050,async()=>{
    try {
        await connection;
        console.log(`server running on port : 5050`)
    } catch (error) {
        console.log(error)
    }
})