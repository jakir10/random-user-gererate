const express = require("express");
const userController = require("../../controllers/user.controller");
const router = express.Router();

router
    .route("/random/user")
    /**
     * @api {get} /for get random user
     */
    .get(userController.getRandomUser)

router.route('/user/all')
    /**
   * @api {for get all user}
   */
    .get(userController.getAllUser)


router.route('/user/save')
    /**
   * @api {for save a user}
   */
    .post(userController.saveUser)


router.route('/user/update/:id')
    /**
   * @api {for update a user}
   */
    .patch(userController.updateUser)


router.route('/user/bulk-update')
    /**
   * @api {for update multiple user}
   */
    .patch(userController.bulkUpdate)



router.route('/user/delete/:id')
    /**
   * @api {for delete a user}
   */
    .delete(userController.deleteUser)


module.exports = router;