const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/todoList', {useNewUrlParser: true}, {useUnifiedTopology: true})
const db = mongoose.connection

const Schema = mongoose.Schema
const taskSchema = new Schema({id: Number, name: String, createdAt: String, todo: Boolean})
const task = mongoose.model('tasks', taskSchema)

db.on('error', console.error.bind(console, 'connection error:'))
 
db.once('open', async ()=>{
  try {
    app.post('/todo', async (req, res) => {
      const todoTask = new task(req.body)
      await todoTask.save()
      res.send()
    })
    .get('/todo', async (req, res) => {
      const allTask = await task.find({})
      res.send(allTask)
    })
    .get('/todo/:id', async (req, res) => {
      console.log()
      const oneTask = await task.findOne({id: req.params.id})
      res.send(oneTask)
    })
    .put('/todo', async (req, res) => {
      await task.updateOne({id: req.body.id}, {todo: !req.body.todo})
      res.send()
    })
    .delete('/todo/:id', async (req, res) => {
      await task.deleteOne({id: req.params.id})
      res.send()
    })
  } catch (error) {
    console.log(error) 
  }
})

app.listen(3030)