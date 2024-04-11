import needle from 'needle';

// UPDATE
needle.post(
    'http://localhost:3000/update',
    {fname: 'Mary Jane'}, 
    (err, res) => {
      console.log(res.body);
    }
  );