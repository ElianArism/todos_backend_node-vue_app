// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Seed
// ============================
    process.env.SEED = process.env.SEED || "este-es-el-seed-desarrollo" 

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/toDoList';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

