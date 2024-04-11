/*  Alyssa F. Cea U5L
*   EXERCISE 6                      ---  STUDENT MANAGEMENT APPLICATION ---
*   APRIL 11 2022 
*/

// Import 
import {saveStudent, updateStudent, deleteStudent, deleteAll, searchUser, searchAll} from './controller.js'

const router = (app) =>{
    // POST /save-student
    app.post('/save-student',saveStudent);

    // POST /update
    app.post('/update',updateStudent);

    // POST /remove-user
    app.post('/remove-user', deleteStudent);

    // POST /remove-all-user
    app.post('/remove-all-user', deleteAll);

    // GET /user
    app.get('/user', searchUser);

    // GET /members
    app.get('/members', searchAll);
}

// Export 
export default router;