const express = require('express');
const router = express.Router();

const feedbacklistsControllers = require('../../Controllers/SecondYear/FeedbacklistsControllers');

router.post('/add-feedbacklist',feedbacklistsControllers.postFeedbacklist);
router.get('/get-feedbacklists',feedbacklistsControllers.getFeedbacklists);
router.get('/get-feedbacklist/:id',feedbacklistsControllers.getFeedbacklistById);
router.delete('/delete-feedbacklist/:id',feedbacklistsControllers.deleteFeedbacklists);
router.patch('/update-feedbacklist/:id',feedbacklistsControllers.updateFeedbacklist);

module.exports = router;