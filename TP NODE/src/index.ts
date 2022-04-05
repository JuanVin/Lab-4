const express = require('express')
const app = express()
const port = 3000
import rutas from './routes'

app.use(express.json());
//transformar los datos de un formulario html a objetos json 
app.use(express.urlencoded({extended:false}));

app.use(rutas);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

