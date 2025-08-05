import dotenv from 'dotenv';
dotenv.config();

export const verifyAdmin = (req, res, next) => {
  const token =
    req.headers['authorization']?.split(' ')[1] || req.query.adminToken;

  if (!token || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
  next();
};
