const express = require('express');
const port = 5000;

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
