module.exports = (mongoose, auth) => mongoose.connect("mongo-bağlantı-link", { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Mongoose bağlandı!\n")).catch(err => console.log(err.message)); // + mongoose.connections[0]._connectionString