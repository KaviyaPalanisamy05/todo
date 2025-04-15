
const mongoose = require('mongoose');
mongoose.set('debug', true);
const PASSWORD = "Bu0XX11oWWNEme6Z"
const DATABASE_NAME = 'sample_mflix';
const CONNECTION_URI ='mongodb+srv://kavya05palani:<Bu0XX11oWWNEme6Z>@todo.ardwydx.mongodb.net/';
async function main() {
    await mongoose.connect(CONNECTION_URI, {
        dbName: DATABASE_NAME,
        user: 'kavya05palani',
        pass: PASSWORD
    });
}

main().then(()=>{
    console.log(`MongoDB Connected `);

}).catch(console.log);