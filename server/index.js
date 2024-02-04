const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
dotenv.config();

const connectdb = require('./database/database');
app.use(cookieParser())
// app.use(cors)
//middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true'); // Allow credentials
  
	next();
  });
  


const adminRoutes = require("./routes/admin")
const employeeRoutes = require("./routes/employee")
const activityRoutes = require("./routes/activity")
const attendanceRoutes = require("./routes/attendance")
const otherRoutes = require("./routes/others")

app.use("/api/admin", adminRoutes)
app.use("/api/employee", employeeRoutes) 
app.use("/api/activity", activityRoutes)
app.use("/api/attendance", attendanceRoutes)
app.use("/api", otherRoutes)

const notfoundmiddleware = (req, res, next) => {
	res.status(404).json({
		sucess: false,
		msg: "Route Doesnt Exist",
	});
};

app.use(notfoundmiddleware);

//connection to database
const PORT = process.env.PORT || 8000;;
const url = process.env.MONGO_URL;

/** start server only when we have a valid connection */
connectdb(url, PORT, app);

