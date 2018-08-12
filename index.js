const fastify = require('fastify')();
import cors from 'cors';
import Routes from './routes';

Routes.map(r => {
  fastify.route({ ...r });
})
// Run the server!
fastify.use(cors());

const start = async () => {
  try {
    await fastify.listen(8000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()