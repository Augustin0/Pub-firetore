const argv=require("yargs").option({
    file:{
        alias:"f",
        demand:true,
        description:"Agrega el nombre de el archivo"
    }
}).help().argv;

module.exports={
    argv
}
