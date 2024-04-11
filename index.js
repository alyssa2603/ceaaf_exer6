/*  Alyssa F. Cea U5L
*   EXERCISE 6                      ---  STUDENT MANAGEMENT APPLICATION ---
*   APRIL 11 2022 
*/

import express from 'express';
const app = express();

// Middleman for GET requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import router from './router.js';   // import the router function
router(app);

app.listen(3000, () => {
    console.log('Server listening on port 3000.');
  });