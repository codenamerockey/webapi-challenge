//Go code!

const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Welcome to My Server</h1>');
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\n**Server running on port ${port}`));
