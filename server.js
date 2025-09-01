const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db.js');

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to Random Ideas API' });
});

const ideaRouter = require('./routes/ideas.js');

app.use('/api/ideas', ideaRouter);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
