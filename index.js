var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/akshaydb', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

var Schema = new mongoose.Schema({
    name: String
});

Schema.methods.speak = function () {
    var greeting = "name:" + this.name
    console.log(greeting);
}

var obj = mongoose.model('obj', Schema);

var object1 = new obj({ name: 'Akshay' });

// // TO CREATE OBJECTS
// object1.save(function (err, object1) {
//     if (err) return console.error(err);
//     object1.speak();
// });

// // TO FIND OBJECTS
// obj.find({}, function (err, objs) {
//     if (err) return console.error(err);
//     console.log(objs);
// })

// // TO UPDATE OBJECTS
// obj.updateOne({}, {}, function (err, res) {
// console.log("Successfully Updated");
// });

// // TO DELETE OBJECTS
// obj.deleteOne({}, function (err) {
//     if (err) return handleError(err);
//     console.log("Objects Deleted Successfully");
// });