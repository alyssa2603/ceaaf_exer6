import needle from 'needle';

// REMOVE ALL USER
needle.post(
    'http://localhost:3000/remove-all-user', 
    (err, res) => {
      console.log(res.body);
    }
);