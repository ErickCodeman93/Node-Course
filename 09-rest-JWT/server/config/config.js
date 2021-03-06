// ======================================
// Puerto
// ======================================

process.env.PORT = process.env.PORT || 3000;

// ======================================
// Entorno
// ======================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======================================
// Base de datos
// ======================================

let urlDB;

// if( process.env.NODE_ENV === 'dev' )
// 	urlDB = 'mongodb://localhost:27017/cafe';
// else
// urlDB = process.env.MONGO_URI;
urlDB = 'mongodb+srv://<user>:<password>@cluster0.zsna1.mongodb.net/cafe';

process.env.URLDB = urlDB;

// ======================================
// Vencimiento del token
// ======================================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ======================================
// SEED de autenticación
// ======================================

process.env.SEED = process.env.SEED || 'secretDev';