const routesPlugin = require('./routes/routes'); 

const fastify = require('fastify')({
    logger: true
});

fastify.register(routesPlugin);

const PORT = {
    port: 3000
}

const start = async () => {
    try {
        await fastify.listen(PORT);
        fastify.log.info(`Server is listenning port`)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();