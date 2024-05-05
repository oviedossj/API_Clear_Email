# API_Clear_Email
// Desarrollo de Http


[60%]= Desarrollar las interface de HTTP
[Done]= Definicion de la clase y sus  metodos
    [Done]= Implementacion de servicio (servicio de conection)
    [Done]= Para probar hacer funcion que lea el json retorne la data 
    [*]= Manejo de Analisis de correos  
    [*]= Test de las funciones nuevas 
// Desarrollo de Repositotio

[*]= Definicion de schema y interface de datos (Mongo)
    [*]= Desarrollo de modelo de datos del usuario (ORM)
    [*]= Connection to mongo
[*]= Definicicion de repositories ( Interface )
[*]= Optencion de datos de credenciales de los usuarios     
[*]= Inicializacion indexada 
[*]= Test de repositories 

// Desarrollo de Servicio 

[*]= Desarrollo de Interface del service ( implementando repositories y https )
[*]= Definicion de (3 metodo) Router

// Desarrollo de Midleware


[*]= Verificaciond de token  
[*]= Definicion  finimos inicializaciones de (repository,http)

// Desarrollo de Controlador 


[*]= Armado de plantilla de controlador 
[*]= Params Definidos (site,limmit,sort,dir)
        {
            get =>  Validacion 
            get =>  Datos de los correos para analizar (guardar en una cookies , o el fron pase un array de id de todos los correos )
            put =>  actualizacion de credenciales 
            delete => Array de id de todos los correos a eliminar
        }  
[*]= Test End to End