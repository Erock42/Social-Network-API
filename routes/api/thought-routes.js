const router = require('express').Router();
const {
	getThoughts,
	getThoughtWithId,
	addNewThought,
	updatedThought,
	removedThought,
	addedReaction,
	removedReaction
} = require('../../controllers/thought-controller');

router
	.route('/')
	.get(getThoughts)
	.post(addNewThought);

router
	.route('/:thoughtId')
	.get(getThoughtWithId)
	.post(addNewThought)
	.put(updatedThought)
	.delete(removedThought);

router
	.route('/:thoughtId/reactions')
	.post(addedReaction);

router.route('/:thoughtId/:reactionId')
	.delete(removedReaction);

module.exports = router;