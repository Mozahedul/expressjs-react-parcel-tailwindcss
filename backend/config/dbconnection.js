const mongoose = require("mongoose");
// Database connection MongoDB
const connectionDB = async () => {
	const uri = process.env.MONGOOSE_URL;
	try {
		const conn = await mongoose.connect(uri, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log("MONGODB DATABASE CONNECTED ==> ", conn.connection.host);
	} catch (error) {
		console.log("DATABASE CONNECTION FAILED ==> ", error.message);
	}
};

module.exports = {connectionDB};
