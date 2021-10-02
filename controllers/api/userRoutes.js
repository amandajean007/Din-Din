const router = require('express').Router();
const { User } = require('../../models');

// /api/user 
//sign up 
router.post('/', async (req, res) => {
  try {
    console.log(req.body.username);
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//login
router.post('/login', async (req, res) => {
console.log(req.body.email);
console.log(req.body.password);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.email = userData.email;
      req.session.userId = userData.id;
      req.session.logged_in = false;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
//still need work 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;