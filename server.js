const express = require('express');
const port = 5000;

const ideas = [
	{
		id: 1,
		text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
		tag: 'Technology',
		username: 'TonyStark',
		date: '2022-01-02',
	},
	{
		id: 2,
		text: 'Milk cartons that turn a different color the older that your milk is getting',
		tag: 'Inventions',
		username: 'SteveRogers',
		date: '2022-01-02',
	},
	{
		id: 3,
		text: 'A mobile app that connects local farmers directly with consumers for fresh produce delivery',
		tag: 'Business',
		username: 'NatashaRomanoff',
		date: '2022-01-03',
	},
	{
		id: 4,
		text: 'Smart water bottles that remind you to stay hydrated and track your daily water intake',
		tag: 'Health',
		username: 'BruceBanner',
		date: '2022-01-04',
	},
];

const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'Hello World' });
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
