export const applyPolicy = (roles) => {
  return (req, res, next) => {
    // Si la ruta es publica, la dejamos pasar directamente
    if (roles[0].toUpperCase() === 'PUBLIC') return next();

    // Verificamos si existe usuario logueado en la request provisto por passport/jwt
    if (!req.user) {
      return res.status(401).send({ status: 'error', error: 'User not authenticated' });
    }

    // Verificamos si el rol del usuario está dentro de los roles permitidos
    const userRole = req.user.role ? req.user.role.toUpperCase() : 'USER';
    const authorizedRoles = roles.map(role => role.toUpperCase());
    
    if (!authorizedRoles.includes(userRole)) {
      return res.status(403).send({ status: 'error', error: 'Forbidden: Insufficient privileges' });
    }

    // Si tiene los permisos, continuamos al controlador
    next();
  };
};
