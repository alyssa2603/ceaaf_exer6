/*  Alyssa F. Cea U5L
*   EXERCISE 6                      ---  STUDENT MANAGEMENT APPLICATION ---
*   APRIL 11 2022 
*/

import mongoose from 'mongoose';

// Connect to the Mongo Database
await mongoose.connect("mongodb+srv://afcea:wlnW11pzj1BVnJPK@cluster0.w8o8xlw.mongodb.net/ICS",{
    useNewUrlParser: true, useUnifiedTopology: true
});

// Schema/ Model
const Student = mongoose.model('students',{
    stdnum : Number,
    fname: String,
    lname: String,
    age: Number
});

//POST /save-student
const saveStudent = async (req,res) => {
    // Create a new instance
    const newStudent = new Student({
        stdnum: req.body.stdnum,
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age
    });
    
    // Catch errors
    try {
        console.log(await newStudent.save());
    }
    catch(err) { 
        res.send({inserted:false}) }

    res.send({inserted:true})
} 

// POST /update
const updateStudent = async (req,res) => {
    res.send(await Student.updateOne(
        { fname: req.body.fname},
        {$set: {fname: "Parker"}}
      ));     
}

//POST /remove-user
const deleteStudent = async (req,res) => {
    // Delete with student number
    res.send(await Student.deleteOne({ stdnum: req.body.stdnum}));    
}

// POST /remove-all-user
const deleteAll = async (req,res) => {
    // Delete Many
    var result = await Student.deleteMany({});
   
    // Print Appropriate Operation Code
   if (result.acknowledged == false){
        console.log({inserted:false});
        res.send({inserted:false});
   }else{
        console.log({inserted:true});
        res.send({inserted:true});
    }
}

// GET /user
const searchUser = async (req,res) => {
    // Find with student num
    res.send(await Student.find({stdnum: req.query.stdnum}));
}

// GET /members
const searchAll = async (req,res) => {
    res.send(await Student.find({}));  
}

export {saveStudent, updateStudent, deleteStudent, deleteAll, searchUser, searchAll}