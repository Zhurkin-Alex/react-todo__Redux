const {Schema, model} = require ('mongoose')


const User = new Schema({
  name:{ type:String, reqired:true},
  email:{type:String, unique:true, reqired:true},
  password:{ type:String,  reqired:true},
  roles:[{type:String, ref: "Role"}],
  todo:[{type:Schema.Types.ObjectId , ref: "Todo"}]
})

module.exports = model("User", User)
