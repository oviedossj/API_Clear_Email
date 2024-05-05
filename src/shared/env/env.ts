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
  web: {
      "client_id": "974587719568-osc37i77fq90bnp40vish737206iiehs.apps.googleusercontent.com",
      "project_id": "appclearemail",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_secret": "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",
      "redirect_uri": "https://developers.google.com/oauthplayground",
      "refrest_token":"1//04cYlY-CbUvXdCgYIARAAGAQSNwF-L9Ir3uus2wNR4zkm2fTPeqw9kjAL0_nyFCh79h4Gx-sJ4g4sb8DSws0rgTspQpAbmSqATew" ,
      "access_Token":"ya29.a0AXooCgsJuFG3nlhTy71md-RvEwLvha80GkWlnhHYzrttE3rndiEQknAAVrl8beWskirZRuKLQkmZyzF2C-ZeiBKqKJocmS4ukXfjcp8SbUQeNbVMo9zxwC0HrwZolJGMkesSP48l_ZtFulDf-b22lErasiAGFOd2WDGzYAaCgYKAdMSARASFQHGX2MimKWJ4Pd6pOouLS1srPX9EA0173"
           
    
}
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