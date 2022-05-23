const router = require('express').Router();
const {
	getAllThoughts,
	getThoughtById,
	addThought,
	updatedThought,
	removeThought,
	addReaction,
	removeReaction
} = require('../../controllers/thought-controller');

router
	.route('/')
	.get(getAllThoughts)
	.post(addThought);

router
	.route('/:thoughtId')
	.get(getThoughtById)
	.post(addThought)
	.put(updatedThought)
	.delete(removeThought);

router
	.route('/:thoughtId/reactions')
	.post(addReaction);

router.route('/:thoughtId/:reactionId')
	.delete(removeReaction);

module.exports = router;