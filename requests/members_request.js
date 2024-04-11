import needle from 'needle';

// SEARCH ALL USERS
needle.get(
    'http://localhost:3000/members', 
    (err, res) => {
      console.log(res.body);
    }
);