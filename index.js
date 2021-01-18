const express = require('express')
const path = require('path')
const bodyparser = require('body-parser');
const dbConnect = require('./config/db.js')
var cors = require('cors')
const usersRoute = require('./router/api/users')
const postRoute =  require('./routes/api/posts.js')
const app = express();

app.use(cors())
app.use (bodyparser.urlencoded({extended:true}))
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000
/// connect to db
dbConnect();
///to start app
app.listen (PORT , (req,res)=>{
    console.log ('second server is running at port:',PORT)

});

///Routes
app.use('/api/users',userRoute)
app.use('/api/posts', postRoute)







