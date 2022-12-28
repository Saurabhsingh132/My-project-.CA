const mongoose = require('mongoose');

const dbName = "mernwssnov";
const url = `mongodb+srv://Saury:saurabh123@atlascluster.cqvxlou.mongodb.net/${dbName}?retryWrites=true&w=majority`

// synchronous vs asynchronous
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;