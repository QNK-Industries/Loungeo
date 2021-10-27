const express = require('express');

const app = express();
// const cors = require('cors');

const PORT = 3000 || process.env.PORT;

// app.use(express.static('client/dist'));
// app.use(express.json());
// app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  // console.log('Server listening on port:', `${PORT}`);
});
