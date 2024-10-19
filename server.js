const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route to reset the responses array
server.put('/responses/reset', (req, res) => {
  const db = router.db; // Access the lowdb instance
  db.set('responses', []).write(); // Reset responses to an empty array
  res.status(200).json({ message: 'Responses reset successfully' });
});

server.use(router);
server.listen(5001, () => {
  console.log('JSON Server is running on port 5001');
});
