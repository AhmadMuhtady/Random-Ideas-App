const express = require('express');
const router = express.Router();
const Idea = require('../modules/Idea.js');

// get all ideas
router.get('/', async (req, res) => {
	try {
		const ideas = await Idea.find();
		res.json({ success: true, data: ideas });
	} catch (error) {
		console.error('Error in GET /api/ideas:', error); // log full error
		res.status(500).json({ success: false, error: error.message });
	}
});

// get idea
router.get('/:id', async (req, res) => {
	try {
		const idea = await Idea.findById(req.params.id);
		res.json({ success: true, data: idea });
	} catch (error) {
		console.error('Error in GET idea:', error); // log full error
		res.status(500).json({ success: false, error: error.message });
	}
});

// ADD AN IDEA
router.post('/', async (req, res) => {
	const idea = new Idea({
		text: req.body.text,
		tag: req.body.tag,
		username: req.body.username,
	});

	try {
		const savedIDea = await idea.save();
		res.json({ success: true, data: savedIDea });
	} catch (error) {
		console.error('Error in POST /api/ideas:', error); // log full error
		res.status(500).json({ success: false, error: error.message });
	}
});

// put/edit idea
router.put('/:id', async (req, res) => {
	try {
		const idea = await Idea.findById(req.params.id);

		if (idea.username === req.body.username) {
			const UpdatedIdea = await Idea.findByIdAndUpdate(
				req.params.id,
				{
					$set: {
						text: req.body.text,
						tag: req.body.tag,
					},
				},
				{ new: true }
			);
			return res.json({ success: true, data: UpdatedIdea });
		}
		// username does not match
		res.status(403).json({ success: false, error: error.message });
	} catch (error) {
		console.error('Error in updating idea:', error); // log full error
		res.status(500).json({ success: false, error: error.message });
	}
});

// delete an idea
router.delete('/:id', async (req, res) => {
	try {
		const idea = await Idea.findById(req.params.id);

		// match id username
		if (idea.username === req.body.username) {
			await Idea.findByIdAndDelete(req.params.id);
			res.json({ success: true, data: {} });
		} else {
			res.status(403).json({ success: false, error: error.message });
		}
	} catch (error) {
		console.error('Error in updating idea:', error); // log full error
		res.status(500).json({ success: false, error: error.message });
	}
});

module.exports = router;
