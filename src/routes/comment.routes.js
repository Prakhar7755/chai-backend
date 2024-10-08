import { Router } from "express";
import {
  addCommentToTweet,
  addCommentToVideo,
  deleteComment,
  getTweetComments,
  getVideoComments,
  updateComment,
} from "../controllers/comment.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // verify each route with the middleware

router.route("/v/:videoId").get(getVideoComments).post(addCommentToVideo);
router.route("/t/:tweetId").get(getTweetComments).post(addCommentToTweet);
router.route("/c/:commentId").delete(deleteComment).patch(updateComment);

export default router;
