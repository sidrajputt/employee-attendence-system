const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
dotenv.config();

const connectdb = require('./database/database');
app.use(cookieParser())

//middleware
app.use(morgan("dev"))
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Change this to your frontend's actual URL
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow credentials (e.g., cookies) to be included in the request
	next();
});

const adminRoutes = require("./routes/admin")
const employeeRoutes = require("./routes/employee")

app.use("/api/admin", adminRoutes)
app.use("/api/employee", employeeRoutes)

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

