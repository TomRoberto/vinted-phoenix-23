const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  // Si je ne reçois pas de token
  if (!req.headers.authorization) {
    // Je renvoie un message d'erreur
    return res.status(401).json({ message: "Unauthorized" });
  }
  // J'enlève "Bearer " de deavnt mon token
  const token = req.headers.authorization.replace("Bearer ", "");

  // Je vais chercher, dans ma collection User un document dont la clef token contient le token reçu dans les headers.
  // Je demande à mongoose de ne me renvoyer que les clefs account et _id du user
  const user = await User.findOne({ token: token }).select("account _id");
  // Si je n'en trouve pas
  if (user === null) {
    // Je renvoie un message d'erreur
    return res.status(401).json({ message: "Unauthorized" });
  }
  // Je stocke le user trouvé dans req
  req.user = user;
  // Je passe à la suite
  next();
};

module.exports = isAuthenticated;
