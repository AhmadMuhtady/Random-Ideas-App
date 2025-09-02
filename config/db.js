const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // <-- move this above connect

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`DB Error: ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;
