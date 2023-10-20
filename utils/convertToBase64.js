// J'ai déclaré ma fonction dans ce fichier et je l'ai exportée pour pouvoir l'utiliser partout dans mon code

const convertToBase64 = (file) => {
  return `data:${file.mimetype};base64,${file.data.toString("base64")}`;
};

module.exports = convertToBase64;
