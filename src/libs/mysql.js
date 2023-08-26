import mysql from 'serverless-mysql';

import mysql2 from 'mysql2';



export const conn = mysql({
    config:{
    host: 'localhost',
    user: 'root',
    password: 'danie',
    port: 3306,
    database: 'nextcrud'

    }

    // Configuración de la conexión a la base de datos
const connection= mysql.createConnection({
    host: 'localhost',        // Cambia a la dirección de tu base de datos
    user: 'dani',       // Cambia a tu nombre de usuario de la base de datos
    password: '12345678', // Cambia a tu contraseña de la base de datos
    database: 'basedatos'     // Cambia al nombre de tu base de datos
  });
  
  // Conectar a la base de datos
  connection.connect((error) => {
    if (error) {
      console.error('Error al conectar a la base de datos:', error);
    } else {
      console.log('Conexión exitosa a la base de datos!');
    }
  });
  
  // Exportar la conexión para que esté disponible en otros archivos
  module.exports = connection;
  

})