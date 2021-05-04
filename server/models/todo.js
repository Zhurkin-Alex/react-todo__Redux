const mongoose = require ('mongoose')

module.exports= mongoose.model('Todo', {
  todoName: String,
  todoTextarea: String,
  todoadd:{type:Boolean, default:false}
})
