import * as express from 'express'
import * as fs from "fs";
import * as path from "path";
import * as figlet from 'figlet'

const app = express()

const files = fs.readdirSync(path.join(__dirname, '..',
  'node_modules/figlet/fonts'
)).filter((f) => f.endsWith('flf'))
  .map(f => f.replace(/\.flf$/, ''))

app.get('/', (req, res) => {
  const font = req.query.font || 'Standard'
  const text = req.query.text || 'bye bye!'

  res.json({figlet: figlet.textSync(text, font)})
})

app.get('/fonts', (req, res) => {

  res.json({fonts: files})
})


export default app
