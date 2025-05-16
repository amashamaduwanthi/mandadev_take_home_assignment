const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    // TODO: Implement auth middleware

    // 1. Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Authorization header missing or invalid'});
    }

    const token = authHeader.split(' ')[1];

    try {
        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 3. Add user info to request object
        req.user = decoded;

        next(); // continue to the next middleware or route
    } catch (err) {
        return res.status(401).json({message: 'Invalid or expired token', error: err.message});
    }
};

module.exports = authMiddleware;
