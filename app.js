const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const routes = require('./routes');
app.use(routes);

// // Middleware penanganan kesalahan
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).json({ error: 'Internal Server Error' });
// });

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})