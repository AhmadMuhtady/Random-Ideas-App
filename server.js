const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db.js');

connectDB();
const app = express();

/// static folder

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cors middleware
app.use(
	cors({
		origin: ['http://localhost:5000', 'http://localhost:3000'],
		credentials: true,
	})
);

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Random Ideas API' });
});

const ideaRouter = require('./routes/ideas.js');

app.use('/api/ideas', ideaRouter);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
