const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb+srv://sourangvu:l0csEHeT1uPl4ZSV@assignments.haswj.mongodb.net/?retryWrites=true&w=majority&appName=Assignments');
}

app.use(express.json())

main()
.then(res => {
    console.log("DB connected")
})
.catch(err => console.log(err));

const MessageSchema = new mongoose.Schema({
  message: String,
  
});
const Message = mongoose.model('message', MessageSchema);


app.get('/', async(req, res) => {
  const message = await Message.find()
  console.log(message)
  res.send(message)
})

app.post('/', (req, res) => {
  const {message} = req.body 
  Message.create({message}) 
  res.send('Response for POST request')
})

app.put('/', (req, res) => {
  res.send('Response for PUT request')
})

app.delete('/', (req, res) => {
  res.send('Response for DELETE request')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});