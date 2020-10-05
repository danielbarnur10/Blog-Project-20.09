const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)


app.get('/', (req, res) => {
     const articles=[{
          title: 'Test Articles',
          createdAt: new Date(),
          description: 'Test descriptions'
     },
     {
          title: 'Test Articles 2',
          createdAt: new Date(),
          description: 'Test descriptions 2'
     }]
     res.render('index', {articles: articles})
}) 

app.listen(5000)    