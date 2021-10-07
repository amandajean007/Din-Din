const router = require('express').Router();
const { User } = require('../../models');

// /api/user 
//sign up 
router.post('/', async (req, res) => {
  try {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a user`);
    // console.log(req.body);
  
    const userData = await User.create(req.body);
      console.log(userData);
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json(err);
  }
});

//login
router.post('/login', async (req, res) => {
  console.log("line 17", req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.emailEl } });
    console.log("line30", userData);
    
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.passwordEl);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.userEmail = userData.email;
      req.session.loggedIn = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout
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