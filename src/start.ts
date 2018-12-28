import app from './app'


app.listen(3000, (err) => {
  if (err) {
    return console.error('failure with error', err.message)
  }

  console.error("start figlet service at  3000")
})
