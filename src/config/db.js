import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB Conectado');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error.message);
        process.exit(1); 
    }
};

export default connectDB;
