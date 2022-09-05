const router = require('express').Router();


const {
    createUser,
    getUsers,
    getSingleUser,
    addFriend,
    deleteFriend,    
    updateUser,
    deleteUser,
} = require('../../controllers/userController');



// /api/users
router.route('/').get(getUsers).post(createUser);




// /api/users/:userId
router
    .route('/:userId')
    .put(updateUser)    
    .get(getSingleUser)
    .delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);



// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(deleteFriend)

module.exports = router;