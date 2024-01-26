const Session = require('../models/sessions');

const authenticateUser = async (req, res, next) => {
  const sessionId = req.cookies.sessionId;

  if (!sessionId) {
    return res.status(401).json({ error: 'LOGIN!' });
  }

  try {
    const session = await Session.findOne({ sessionId });

    if (!session || session.expiresAt < Date.now()) {
      return res.status(401).json({ message: 'Session expired or not found' });
    }

    req.userId = session.userId;
    next();
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { authenticateUser };
