// Session handling for authenticated users.
const crypto = require("crypto");

const SESSION_TTL_MINUTES = 60;

function createSession(userId) {
  return {
    userId,
    token: crypto.randomBytes(32).toString("hex"),
    expiresAt: Date.now() + SESSION_TTL_MINUTES * 60 * 1000,
  };
}

function isSessionValid(session) {
  return Boolean(session) && Date.now() < session.expiresAt;
}

module.exports = { createSession, isSessionValid };
