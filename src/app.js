import express from 'express';
import handlebars from 'express-handlebars';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

dotenv.config();

// Conectar a MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

app.engine('handlebars', handlebars.engine());
app.set('views', 'src/views');
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
