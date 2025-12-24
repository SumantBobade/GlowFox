import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ message: "Missing token" });

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    { issuer: "glowfox-api", audience: "glowfox-client" },
    (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid token" });

      req.user = decoded;
      next();
    }
  );
};
