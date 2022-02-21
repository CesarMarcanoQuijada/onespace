import jwt from "jsonwebtoken";

const MONGODB_URI = process.env.JWT_SECRET;

export function signUser(user) {
  const ONE_MONTH = 30 * 24 * 60 * 60;

  user = JSON.parse(JSON.stringify(user));

  return jwt.sign(user, MONGODB_URI, { expiresIn: ONE_MONTH });
}

export function verifyUser(token) {
  return jwt.verify(token, MONGODB_URI);
}
