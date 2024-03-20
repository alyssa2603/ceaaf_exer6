import mongoose from 'mongoose';


// connection string for compass
await mongoose.connect( 'mongodb+srv://afcea:wlnW11pzj1BVnJPK@cluster0.w8o8xlw.mongodb.net/ICS', {  
 useNewUrlParser: true, useUnifiedTopology: true });

// sample connection string for atlas
// mongodb+srv://<dbusername>:<password>@cluster0.dftckjy.mongodb.net/ICS
const Student = mongoose.model('students', {
    stdnum: Number,
    fname: String,
    lname: String,
    age: Number
  })

let data = await Student.find({});
console.log(data);
