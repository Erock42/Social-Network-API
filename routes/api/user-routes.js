const router = require('express').Router();
const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
	removeFriend
} = require('../../controllers/user-controller');

// /api/Users
router
	.route('/')
	.get(getAllUsers)
	.post(createUser);

// /api/Users/:id
router
	.route('/:userId')
	.get(getUserById)
	.put(updateUser)
	.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
	.route('/:userId/friends/:friendId')
	.post(addFriend)
	.delete(removeFriend);

module.exports = router;