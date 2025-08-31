const express = require('express');
const router = express.Router();

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

// get all ideas
router.get('/', (req, res) => {
	console.log('API route hit!');
	res.json({ success: true, data: ideas });
});

// get idea
router.get('/:id', (req, res) => {
	console.log('API route hit!');
	const idea = ideas.find((idea) => idea.id === +req.params.id);
	if (!idea) {
		return res
			.status(404)
			.json({ success: false, error: 'Resource not found' });
	}

	res.json({ success: true, data: idea });
});

// ADD AN IDEA
router.post('/', (req, res) => {
	console.log('POST route hit!');
	const idea = {
		id: ideas.length + 1,
		test: req.body.text,
		tag: req.body.tag,
		username: req.body.username,
		date: new Date().toISOString().slice(0, 10),
	};
	ideas.push(idea);
	res.json({ success: true, data: idea });
});

module.exports = router;
