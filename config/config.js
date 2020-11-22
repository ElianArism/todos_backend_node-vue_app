// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/toDoList';
} else {
    urlDB = process.env.DB_HOST;
    // urlDB = 'mongodb+srv://atlas_user:MyUGH7UuqqECzKhu@cluster0.66oai.mongodb.net/todos'; 
    // 0EL7t3DFQPAYy4lD
}
process.env.URLDB = urlDB;

