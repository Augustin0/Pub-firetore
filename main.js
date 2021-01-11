const {argv}=require("./comandLines");
const {addData}=require("./pubTofirebase");
const {print}=require("./utils").utiles;

(()=>{
  let fileName=argv.file;
  addData(fileName).then((succ)=>{
      print(succ)
  }).catch(err=>{
      print(err)
  })
}
)();