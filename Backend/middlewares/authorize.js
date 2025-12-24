export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
};


export const authorizePermissions = (...permissions) => {
  return (req, res, next) => {
    const userPerms = req.user.permissions || [];
    const allowed = permissions.every(p => userPerms.includes(p));
    if (!allowed)
      return res.status(403).json({ message: "Insufficient permissions" });
    next();
  };
};
