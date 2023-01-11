const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express()
var bodyParser = require("body-parser");
const authorRoute = require("./routes/author");
const articleRoute = require("./routes/article");
const userRoute = require("./routes/user");
const dotenv = require('dotenv')
dotenv.config();
app.use(cors());

// CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL, ()=>{
  console.log('Connect database successful');
})

const port = 8000
app.use(bodyParser.json({limit:"50mb"}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//ROUTES
app.use("/author", authorRoute);
app.use("/article", articleRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// export default app;
