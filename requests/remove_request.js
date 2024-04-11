import needle from 'needle';

// REMOVE USER
needle.post(
    'http://localhost:3000/remove-user',
    {stdnum:'202211689'}, 
    (err, res) => {
      console.log(res.body);
    }
);