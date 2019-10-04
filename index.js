//Go code!

const express = require('express');
const helmet = require('helmet');

const projectRoutes = require('./projects/projectRouter');
const actionRoutes = require('./actions/actionRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.get('/', (req, res) => {
  res.send('<h1>Welcome to My Server</h1>');
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`\n**Server running on port ${port}`));
