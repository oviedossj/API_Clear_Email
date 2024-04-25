    // import { Database } from '@shared/db';
    import { config } from '@shared/index';
    import { Server } from '@server/index';
    import SearchRegisterRoutes from '@clear/routers';
    
  (async () => {
    // const database = new Database(config.DB_CONNECTION);
    // await database.authenticate();
    const routes = [...(await SearchRegisterRoutes())];
    const server = new Server(config.PORT, routes);
    server.start();
  })();