
const readJson = (payload) => {
  return new Promise((resolve, reject) => {
    try {
    const data = require(`./DATA/${payload.fileName}.json`);
    if (data) {
      resolve(data);
    } else {
      reject(`No existe da en ${payload.fileName} `.red);
    } }
   catch (error) {
    reject(`El archivo ${payload.fileName} no existe en el programa`.red);
      
  }
  });
};

module.exports = {
  readJson,
};
