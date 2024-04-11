import needle from 'needle';

// SAVE STUDENT
needle.post(
    'http://localhost:3000/save-student',
    {stdnum:'202211689', age: '20', fname: 'Alyssa', lname:'Cea'}, 
    (err, res) => {
      console.log(res.body);
    }
);

needle.post(
  'http://localhost:3000/save-student',
  {stdnum: '202312345', age: '19', fname: 'Jared', lname:'Oquindo'}, 
  (err, res) => {
    console.log(res.body);
  }
);

needle.post(
  'http://localhost:3000/save-student',
  {stdnum: '20244793', age: '18', fname: 'Chelsea', lname:'Kimson'}, 
  (err, res) => {
    console.log(res.body);
  }
);

needle.post(
  'http://localhost:3000/save-student',
  {stdnum: '202163021', age: '19', fname: 'Mary', lname:'Opena'}, 
  (err, res) => {
    console.log(res.body);
  }
);

needle.post(
  'http://localhost:3000/save-student',
  {stdnum: '20217249', age: '20', fname: 'Mary Jane', lname:'Watson'}, 
  (err, res) => {
    console.log(res.body);
  }
);