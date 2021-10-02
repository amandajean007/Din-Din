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
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
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
          req.session.username = userData.username;
        req.session.userId = userData.id;
        req.session.logged_in = false;
        
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