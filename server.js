const express = require('express')
const connection = require('./config/sequelize')
const question = require('./models/Question')
const answer = require('./models/Answers')


const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


try {
  connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Error in database:', error);
}

app.get('/', (request, response) => {

  question.findAll({
    raw: true, order: [
      ['id', 'DESC']
    ]
  }).then((questions) => {
    response.render('index', {
      questions: questions
    })
  })
})

app.get('/question/:id', (request, response) => {
  const id = request.params.id

  question.findOne({
    where: { id: id }
  }).then((question) => {

    if (question != undefined) {
    answer.findAll({
      where: {questionId: question.id},
      order: [
        ['id', 'DESC']
      ]
    }).then((answers) => {
      response.render('question', {
        question: question,
        answers: answers
      })
    })
    } else {
      response.redirect('/')
    }
  })
})

app.get('/questions', (request, response) => {
  response.render('questions')
})

app.post('/savequestion', (request, response) => {

  const title = request.body.title
  const description = request.body.description

  question.create({
    title: title,
    description: description
  }).then(() => {
    response.redirect('/')
  })
})

app.post('/answer', (request, response) => {

  const body = request.body.body
  const questionId = request.body.question

  answer.create({
    body: body,
    questionId: questionId
  }).then(() => {
    response.redirect(`/question/${questionId}`)
  })
})

app.listen(port, () => {
  console.log(`backend is running port: ${port}`)
})