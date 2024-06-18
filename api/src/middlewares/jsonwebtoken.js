const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../constants')



const signToken = (payload = {}, expiresIn = '12h') => {
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn })

  return token
}

const authorizeBearerToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(400).json({
        message: 'Token no proporcionado',
      })
    }

    const auth = jwt.verify(token, JWT_SECRET)
    if (!auth) {
      return res.status(401).json({
        message: 'No autorizado - token no válido',
      })
    }

    req.auth = auth
    next()
  } catch (error) {
    console.error(error)
    return res.status(401).json({
      message: 'No autorizado - token no válido',
    })
  }
}


const admin = (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
    
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: "No autorizado como administrador",
    })
  }
};

module.exports = {
  authorizeBearerToken,
  signToken,
  admin,
}

