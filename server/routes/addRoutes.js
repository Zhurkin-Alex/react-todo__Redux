const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

router.post('/addTodo', async(req,res)=>{
  const {todoName,todoTextarea} = req.body
  try {
    if(todoName,todoTextarea){
      const newTodo = await Todo.create({
        todoName,todoTextarea
      })
      res.status(200).json({sucses:true, newTodo})

    }
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }

})
router.get('/findAll', async(req,res)=>{
  try {
    const allTodo = await Todo.find()
    res.status(200).json( {allTodo})

  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

router.put('/checkbox', async(req,res)=>{
  const{id}= req.body
  try {
    const checkTodo = await Todo.findById(id)
    checkTodo.todoadd = !checkTodo.todoadd
    await checkTodo.save()
    res.status(200).json({sucsess:true, id, })
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})


router.put('/updateTodo', async(req,res)=>{
  const{id, name, todoTextarea}= req.body
  try {
    const updateTodo = await Todo.findById(id)
    updateTodo.todoName = name
    updateTodo.todoTextarea = todoTextarea
    await updateTodo.save()
    res.status(200).json({sucsess:true, updateTodo })
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

router.delete('/delete', async (req,res)=>{
  const{id}= req.body
  try {
  await Todo.findByIdAndDelete(id)
    res.status(200).json({sucsess:true, id})
  } catch (error) {
    res.status(404).json({ succes: false, msg: error.message });

  }
})

module.exports=router
