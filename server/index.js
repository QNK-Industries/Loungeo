const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000 || process.env.PORT;

app.use(express.static('./client'));
app.use(express.json());
app.use(cors())



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})