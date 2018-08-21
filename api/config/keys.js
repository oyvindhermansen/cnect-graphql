const mongodbUser = process.env.MONGODB_USER;
const mongodbPassword = process.env.MONGODB_PASSWORD;
const mongodbServer = process.env.MONGODB_SERVER;
const mongodbName = process.env.MONGODB_NAME;

// Usable constants
const mongoURI = `mongodb://${mongodbUser}:${mongodbPassword}@${mongodbServer}/${mongodbName}`;
const jwtSecret = process.env.JWT_SECRET || 'secret123hahaw00t';

module.exports = { mongoURI, jwtSecret };
