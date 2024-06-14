const uuid = require('uuid'); 
const Session = require('../models/session');

const sessionMiddleware = async (req, res, next) => {
  // retrieves session if from the cookies attached to req
  let sessionId = req.cookies.session_id;

  if (!sessionId) {
	// Generate a new session ID
    sessionId = uuid.v4(); 
    await Session.create({ session_id: sessionId });
    res.cookie('session_id', sessionId, { httpOnly: true });
  }

  req.sessionId = sessionId;
  next();
};

module.exports = sessionMiddleware;
