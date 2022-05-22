const router = require('express').Router();
const {
	getAllUsers,
	getUserWithId,
	createNewUser,
	updatedUser,
	destroyUser,
	addNewFriend,
	removeOldFriend
} = require('../../controllers/user-controller');

// /api/Users
router
	.route('/')
	.get(getAllUsers)
	.post(createNewUser);

// /api/Users/:id
router
	.route('/:userId')
	.get(getUserWithId)
	.put(updatedUser)
	.delete(destroyUser);

// /api/users/:userId/friends/:friendId
router
	.route('/:userId/friends/:friendId')
	.post(addNewFriend)
	.delete(removeOldFriend);

module.exports = router;