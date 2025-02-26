import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Middleware to authenticate the user using JWT
const authMiddleware = (req, res, next) => {
    // Get token from the Authorization header
    const token = req.header("Authorization").replace("Bearer ", "");

    // If no token is found, return a 401 Unauthorized response
    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the user ID to the request object
        req.user = decoded.userId;
        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If the token is not valid, return a 401 Unauthorized response
        res.status(401).json({ message: "Token is not valid" });
    }
};

// Middleware to authorize the user based on their role
const roleMiddleware = (roles) => {
    return (req, res, next) => {
        // If the user's role is not included in the allowed roles, return a 403 Forbidden response
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        // Proceed to the next middleware or route handler
        next();
    };
};

// Export the middleware functions
export { authMiddleware, roleMiddleware };
