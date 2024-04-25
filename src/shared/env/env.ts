import dotenv from 'dotenv';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

dotenv.config();

export default {
  NODE_ENV: 'development' ,
  PORT: Number(process.env.PORT || 8080),
  DOCS_ENDPOINT: '/docs',
  DIR_SWAGGER: process.env.DIR_SWAGGER || './src/shared/docs/swagger.yml',
  DB_CONNECTION: process.env.DB_CONNECTION || 'mariadb://rootuser:rootpass@localhost/mydatabase',
  DB_CONNECTION_MONGO : process.env.DB_CONNECTION_MONGO || 'mongodb://rootuser:rootpass@localhost:27017/',
  SECURITY_API_URL: process.env.SECURITY_API_URL || 'http://localhost:8080',
  PREFIX_URL: process.env.PREFIX_URL || '/',
  MQ_SERVER_URL: process.env.MQ_SERVER_URL || 'tcp://127.0.0.1:9000',
  DIR_ERRORS:  process.env.DIR_ERROR || './src/shared/handler/error.yml',
};
// dbUrl:'postgres://root:9q03OTLiWHxgtimOdpQqOv6jE6lhOkVi@dpg-cjigq7ocfp5c7380cocg-a.oregon-postgres.render.com/mydb_fofv',
// DATABASE=marketplace
// - DB_CONNECTION=${DB_CONNECTION:-mongodb://root:password@mongo:27017/}
// - SECURITY_API_URL=http://security-api:8080/security
// - SECURE='true'
// - VIRTUAL_HOST=localhost
// - VIRTUAL_PATH=/stock/
// - PREFIX_URL=/stock
// - URL_API=http://localhost/stock
// - SECURE=true