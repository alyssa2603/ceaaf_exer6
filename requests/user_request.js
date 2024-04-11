import needle from 'needle';

// SEARCH USER

// In the database vvvv
needle.get(
    'http://localhost:3000/user?stdnum=202211689', 
    (err, res) => {
      console.log(res.body);
    }
);

// Not in the database vvv
needle.get(
  'http://localhost:3000/user?stdnum=1235676', 
  (err, res) => {
    console.log(res.body);
  }
);