const colors=require("colors")
const {readJson}=require("./readJSON");
const {print}=require("./utils").utiles;
const {init}=require("./firebaseConfig");
const reader= async(fileName)=>{
    let result=null; 
    await readJson({fileName}).then(data=>{
        result= data
      }).catch(err=>{
          print(err)
          result= false
      });
      return result
}

const addData= async (fileName)=>{
       return new Promise( async (resolve,reject)=>{
       let data= await reader(fileName);
       if(data){
            init().firestore().collection("firstCole").doc("menu").set({...data}).then(()=>{
          resolve("Transaction realizada con exito".green)
       }).catch(err=>{
           reject(`ERROR! : ${err}`.red)
       })  }
    })  
}
module.exports={
    addData
}